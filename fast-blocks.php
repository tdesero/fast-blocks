<?php
/**
 * Plugin Name:       Fast Blocks
 * Description:       Create Custom Blocks fast and easy with PHP only.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tom Deser
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fast-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

class SingleFastBlock {
	public $settings;

	function __construct($settings) {
		$this->settings = $settings;
		$this->register_block($this->settings);
	}

	public function register_block($settings) {
		register_block_type( $settings['name'], [
			'editor_script' 	=> 'fast-blocks-editor-script',
			'render_callback' => array($this, 'render_callback'),
			'attributes'      => $settings['fields']
		] );
	}

	public function render_callback( $attributes, $content ) {
		if ($this->settings['template']) {
			fast_blocks_instance()->change_current_block_fields( $attributes );
			ob_start();

			$path = get_stylesheet_directory() . $this->settings['template'];
			if ( file_exists( $path ) ) {
				include $path;
			}

			$output = ob_get_clean();
			return $output;
		}
	}
}

class FastBlocksPlugin {

	private $all_blocks = [];

	public $current_block_fields = [];

	public function init() {
		$this->add_scripts();
	}

	public function add_scripts() {
		add_action('enqueue_block_editor_assets', array($this, 'script_assets'));
	}

	public function script_assets() {
		$dir = dirname( __FILE__ );

		$script_asset_path = "$dir/build/index.asset.php";
		if ( ! file_exists( $script_asset_path ) ) {
			throw new Error(
				'You need to run `npm start` or `npm run build` for the "create-block/workshop-stefan-block" block first.'
			);
		}
		$index_js     = 'build/index.js';
		$script_asset = require( $script_asset_path );

		wp_register_script(
			'fast-blocks-editor-script',
			plugins_url( $index_js, __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);

		wp_add_inline_script(
			'fast-blocks-editor-script',
			'const fastBlockBlocks = ' . wp_json_encode( $this->all_blocks ),
			'before'
		);
	}

	public function register_block($settings) {
		$block = new SingleFastBlock($settings);
		$this->all_blocks[$settings['name']] = $settings;
	}
	
	public function change_current_block_fields($attributes) {
		$this->current_block_fields = $attributes;
	}
}

/**
 * Plugin Initialization
 */
function fast_blocks_instance() {
	static $instance;
	if ($instance === null) {
		$instance = new FastBlocksPlugin();
	}
	return $instance;
}

function fast_blocks_init() {
	fast_blocks_instance()->init();
}
add_action( 'init', 'fast_blocks_init' );

/**
 * Helpers
 */

function add_fast_block($settings) {
	fast_blocks_instance()->register_block($settings);
}

function fast_field( $field_string ) {
	$attributes = fast_blocks_instance()->current_block_fields;
	$value = wp_kses_post( $attributes[$field_string] );
	echo $value;
}

function get_fast_field( $field_string ) {
	$attributes = fast_blocks_instance()->current_block_fields;
	$value = $attributes[$field_string];
	return $value;
}