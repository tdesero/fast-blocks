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
 * Classes
 */
require_once( __DIR__ . '/classes/SingleFastBlock.class.php');
require_once( __DIR__ . '/classes/FastBlocksPlugin.class.php');
require_once( __DIR__ . '/classes/FastBlockView.class.php');

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

function fast_blocks_view_instance() {
	static $instance;
	if ($instance === null) {
		$instance = new FastBlockView();
	}
	return $instance;
}

/**
 * Helpers (for theme developers)
 */
require_once( __DIR__ . '/inc/helpers.php');