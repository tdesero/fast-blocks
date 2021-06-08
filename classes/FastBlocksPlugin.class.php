<?php

/**
 * Main Plugin Class
 */
class FastBlocksPlugin {

	private $all_blocks = [];

	// attributes passed by render callback
	private $current_block_attributes = [];

	// original fields of current block
	private $current_block_fields = [];

	// original current single field
	private $current_block_field = [];

	public function init() {
		$this->add_scripts();
	}

	private function add_scripts() {
		add_action('enqueue_block_editor_assets', array($this, 'script_assets'));
	}

	public function script_assets() {
		$dir = dirname( __FILE__ );

		$script_asset_path = "$dir/../build/index.asset.php";
		if ( ! file_exists( $script_asset_path ) ) {
			throw new Error(
				'You need to run `npm start` or `npm run build`.'
			);
		}
		$script_asset = require( $script_asset_path );

		wp_register_script(
			'fast-blocks-editor-script',
			plugins_url( '../build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);

		wp_register_style(
			'fast-blocks-editor-style',
			plugins_url( '../build/index.css', __FILE__ ),
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
	
	public function set_current_attributes( $attributes ) {
		$this->current_block_attributes = $attributes;
	}

	public function get_current_attributes() {
		return $this->current_block_attributes;
	}

	public function set_current_fields( $fields ) {
		$this->current_block_fields = $fields;
	}

	public function get_current_fields() {
		return $this->current_block_fields;
	}

	public function set_current_field( $field_string ) {
		$this->current_block_field = $this->current_block_fields[$field_string];
	}

	public function get_current_field() {
		return $this->current_block_field;
	}
}