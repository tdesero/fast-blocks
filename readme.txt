=== Fast Blocks ===
Contributors:      Tom Deser
Tags:              block
Tested up to:      5.7.0
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Create Custom Blocks fast and easy with PHP only.

== Description ==

Use the function `add_fast_block` to add a block to your theme in PHP. The Plugin automatically creates a interface for your block inside the editor.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/fast-blocks` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Do I have to know some PHP to use this plugin? =

Yes! this plugin is meant to be used by people that create their own themes.

= Do I have to know JavaScript? =

No! The JavaScript part is handled completely by the plugin.

== Changelog ==

= 0.1.0 =
* Release

== Example Usage ==

`$easyblocks_test_settings = [
  'name'      => 'some-slug/block-name',
  'template'  => 'blocks/test', // template from theme-directory
  'settings'  => [
    'title'   => 'Plugin Block', // add the same settings as the original "registerBlockType" function without attributes
  ],
  'fields'    => [
    // with the fields array you can define attributes and the inputs/labels that are needed
    'someString'  => [
      'default'   => 'default string',
      'type'      => 'string',
      'input'	    => 'text',
      'label'     => 'My Label',
    ],
    'image'   => [
      'type'  => 'object',
      'input' => 'image',
      'label' => 'Label for the Upload Button',
    ],
  ]
];

add_fast_block( $easyblocks_test_settings );`