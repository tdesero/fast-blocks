<?php
/**
 * Plugin Name:       Fast Blocks
 * Description:       Create Custom Gutenberg Blocks fast and easy with PHP only.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.2.0
 * Author:            Tom D
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fast-blocks
 *
 * @package           create-block
 */

/**
 * Class for a Single Block
 * has methods for registering a block and rendering the block dynamically
 */
class SingleFastBlock {
	
	public $settings;

	function __construct( $settings ) {
		$this->settings = $settings;
		$this->register_block($this->settings);
	}

	public function register_block( $settings ) {
		register_block_type( $settings['name'], [
			'editor_script' 	=> 'fast-blocks-editor-script',
			'editor_style'		=> 'fast-blocks-editor-style',
			'render_callback' => array($this, 'render_callback'),

			// TODO: cleanup the attributes. ATM all field settings from the fast block helper are added here (including input/label etc.)
			'attributes'      => $settings['fields']
		] );
	}

	public function render_callback( $attributes, $content ) {
		if ($this->settings['template']) {
			fast_blocks_instance()->set_current_fields( $attributes );
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

/**
 * Main Plugin Class
 */

class FastBlocksPlugin {

	private $all_blocks = [];

	private $current_block_fields = [];

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
				'You need to run `npm start` or `npm run build`.'
			);
		}
		$script_asset = require( $script_asset_path );

		wp_register_script(
			'fast-blocks-editor-script',
			plugins_url( 'build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);

		wp_register_style(
			'fast-blocks-editor-style',
			plugins_url( 'build/index.css', __FILE__ ),
			null,
			$script_asset['version']
		);

		// make all blocks available in JavaScript
		wp_add_inline_script(
			'fast-blocks-editor-script',
			'const fastBlockBlocks = ' . wp_json_encode( $this->all_blocks ),
			'before'
		);
	}

	public function register_block( $settings ) {
		$block = new SingleFastBlock( $settings );
		$this->all_blocks[$settings['name']] = $settings;
	}
	
	public function set_current_fields( $attributes ) {
		$this->current_block_fields = $attributes;
	}

	public function get_current_fields() {
		return $this->current_block_fields;
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

function add_fast_block( $settings ) {
	fast_blocks_instance()->register_block( $settings );
}

function fast_field( $field_string ) {
	$attributes = fast_blocks_instance()->get_current_fields();
	$field = wp_kses_post( $attributes[$field_string] );
	
	echo $field;
}

function get_fast_field( $field_string ) {
	$attributes = fast_blocks_instance()->get_current_fields();
	$field = $attributes[$field_string];

	return $field;
}
