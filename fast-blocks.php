<?php

/**
 * Plugin Name:       Fast Blocks
 * Description:       Create Custom Gutenberg Blocks fast and easily in PHP.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.9.3
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
require_once(__DIR__ . '/classes/SingleFastBlock.class.php');
require_once(__DIR__ . '/classes/FastBlocksPlugin.class.php');
require_once(__DIR__ . '/classes/FastBlockView.class.php');

/**
 * Plugin Initialization
 */
function fast_blocks_instance()
{
	static $instance;
	if ($instance === null) {
		$instance = new FastBlocksPlugin();
	}
	return $instance;
}

function fast_blocks_init()
{
	fast_blocks_instance()->init();
}
add_action('init', 'fast_blocks_init');

// Instance of view class to be used inside SingleFastBlock class
function fast_blocks_view_instance()
{
	static $instance;
	if ($instance === null) {
		$instance = new FastBlockView();
	}
	return $instance;
}

/**
 * Helpers (for theme developers)
 */
require_once(__DIR__ . '/inc/helpers.php');

/**
 * Remove automatic updates
 */
function fast_blocks_disable_auto_update($update, $item)
{
	if ($item->slug === 'fast-blocks') {
		// Get the current version of the installed plugin
		$plugin_data = get_plugin_data(WP_PLUGIN_DIR . '/' . $item->slug . '/' . $item->slug . '.php');
		$current_version = $plugin_data['Version'];

		// Specify the versions you want to disable auto-updates for
		$versions_to_disable = ['0.9.1', '0.9.3', '0.9.3', '0.9.4', '0.9.5', '0.9.6', '0.9.7', '0.9.8', '0.9.9'];

		if (in_array($current_version, $versions_to_disable)) {
			return false; // Disable automatic updates for these specific versions
		}
	}
	return $update; // For other plugins, leave the setting unchanged
}
add_filter('auto_update_plugin', 'fast_blocks_disable_auto_update', 10, 2);
