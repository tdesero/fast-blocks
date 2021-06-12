<?php

/**
 * Class for a Single Block
 * has methods for registering a block and rendering the block dynamically
 */
class SingleFastBlock {
	
	private $settings;
	private $attributes;

	function __construct( $settings ) {
		$this->settings = $settings;

		// extract only the necessary information from fields to attributes
		foreach($settings['fields'] as $key => $value) {
			$this->attributes[$key] = [
				'type' => $value['type'],
				'default' => $value['default'],
			];
		}
		$this->register_block();
	}

	/**
	 * Calls register_block_type to register the block serverside
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	private function register_block() {
		register_block_type( $this->settings['name'], [
			'editor_script' 	=> 'fast-blocks-editor-script',
			'editor_style'		=> 'fast-blocks-editor-style',
			'render_callback' => array($this, 'render_callback'),
			'attributes'      => $this->attributes,
		] );
	}

	/**
	 * @param array $attributes - All attributes passed via render_callback
	 * @param mixed $content - Content of InnerBlocks
	 * @return string - Returns the template html
	 */
	public function render_callback( $attributes, $content ) {
		if ($this->settings['template']) {
			fast_blocks_instance()->set_current_attributes( $attributes );
			fast_blocks_instance()->set_current_fields( $this->settings['fields'] );
			ob_start();

			$path = get_stylesheet_directory() . $this->settings['template'];
			if ( file_exists( $path ) ) {
				$this->template( $path, $content );
			} else {
				echo '<p>Template not found for custom block <code>"' . $this->settings['name'] . '"</code>.</p>';
			}

			$output = ob_get_clean();
			return $output;
		}
	}

	/**
	 * @param string $template_path - Absolute path to the block template
	 * @param mixed $content – Content of InnerBlocks
	 */
	public function template( $template_path, $content ) {
		// make view class available as $block in templates
		$block = fast_blocks_view_instance();
		include $template_path;
	}
}