<?php
/**
 * Adds the whole server side rendered post/page content to yoast analysis including dynamic blocks.
 */
class FastBlocksYoastContent
{

    /**
     * FastBlocksYoastContent constructor.
     */
    public function __construct()
    {
        // enqueue javascript file
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        // add rest route for rendering the content (used inside the js file)
        add_action('rest_api_init', [$this, 'register_rest_route']);
    }

    /** 
     * Enqueues the script file.
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script('fast-block-yoast', plugins_url('/FastBlocksYoastContent.js', __FILE__), [], '1', true);
    }

    function render_dynamic_content(WP_REST_Request $request)
    {
        $content = $request->get_param('content');

        if (empty($content)) {
            return new WP_Error('no_content', 'No content provided', ['status' => 400]);
        }

        // Apply WordPress filters to render blocks and shortcodes
        $rendered_content = apply_filters('the_content', $content);

        return rest_ensure_response(['rendered' => $rendered_content]);
    }

    /**
     * registers a rest route for rendering all content (including dynamic blocks)
     */
    function register_rest_route()
    {
        register_rest_route('_fast-blocks/v1', '/render-content/', [
            'methods' => 'POST',
            'callback' => [$this, 'render_dynamic_content'],
            'permission_callback' => function () {
                return current_user_can('edit_posts');
            },
        ]);
    }

}

/** 
 * Loads the plugin.
 */
function fast_blocks_yoast_content()
{
    new FastBlocksYoastContent();
}

if (!wp_installing()) {
    add_action('init', 'fast_blocks_yoast_content', 20);
}