=== Fast Blocks ===
Contributors:      tdesero
Tags:              block
Tested up to:      6.6
Stable tag:        0.9.4
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Create Custom Blocks fast and easy with PHP only.

== Description ==

Use the function `add_fast_block` to add a block to your theme in PHP. The Plugin automatically creates an interface for your block inside the editor.
Unlike the default block behaviour all blocks are rendered dynamically. This means changes inside the template are shown immediately without resaving the post or page.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/fast-blocks` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Do I have to know PHP to use this plugin? =

Yes! this plugin is meant to be used by developers and people that create their own themes.

= Do I have to know JavaScript? =

No! The JavaScript part is handled completely by the plugin.

= Does it work with SEO Plugins? =

Yoast SEO is supported. To avoid problems with dynamic blocks and SEO analyzing Plugins, most fields are stored inside the block content the traditional way additionally. But this doesn't mean it is 100% reliable.

== Changelog ==

= 0.9.5 =
* Release
- add color field input
- yoast content analysis

= 0.9.4 =
* Release
- fix issue with classic editor on mobile device preview
- fix repeater field control issue

= 0.9.0 =
* Release
- added "focalPointPicker" as option for image field
- added 'templateRenderCallback' option when registering the block

= 0.8.0 =
* Release
added "allowTransformFrom" option

== Example Usage ==

Register your block:

`$options = [
  'name'      => 'some-slug/block-name',
  // template from theme-directory
  'template'  => '/blocks/test.php',
  'settings'  => [
    // same settings as the original "wp.registerBlockType" without attributes.
    'title'   => 'Plugin Block',
  ],
  'fields'    => [
    // define attributes and inputs/labels etc. that are needed.
    'headline'  => [
      'label'    => 'My Label',
      'type'     => 'string',
      'input'	   => 'text',
      'default'  => 'default string',
      'width' => 0.5, // optional for all fields except repeater
      // optional selector: useful fallback if dynamic rendering does not work. Also good for WP SEO PLugins.
      'selector' => 'h2',
    ],
    'text'  => [
      'label'    => 'Some Text',
      'type'     => 'string',
      'input'	   => 'richText',
      'default'  => 'default string',
    ],
    'image'   => [
      'label'   => 'Label for the Upload Button',
      'type'    => 'object',
      'input'   => 'image',
      'default' => [
        'url'   => 'image.jpeg',
        'alt'   => 'Alternative Text',
        'sizes' => []
      ]
    ],
    'bgColor' => [
      'label'   => 'Background',
      'type'    => 'string',
      'default' => 'light',
      'input'	  => 'select',
      'options' => [
        ['label' => 'light', 'value' => 'light'],
        ['label' => 'dark', 'value' => 'dark'],
      ]
    ],
    'someBool' => [
      // ...
      'type'    => 'boolean',
      'input'   => 'checkbox',
    ],
    'someArray' => [
      // ...
      'type' => 'array',
      'default' => [],
      'input' => 'repeater',
      'query' => [
        'subField1' => [
          'type' => 'string',
          'input' => 'text',
          'default' => 'default list item',
        ],
        'subField2' => [
          'type' => 'boolean',
          'input' => 'checkbox',
          'default' => true,
        ],
      ]
    ]
  ]
];

add_fast_block( $options );`

Available inputs: `text`, `richText`, `checkbox`, `toggle`, `select`, `image`, `url`, `email`, `date`.
At the moment default values are mandatory.

Example usage inside template:

`<div>
  <h2><?php $block->field('headline'); ?></h2>
  <img src="<?php echo $block->field_value('image')['url']; ?>">
</div>`

For `$block->field` function sanitizing is done with `wp_kses_post`. If you need more complex sanitizing, use `$block->field_value`, sanitize on your own and `echo` the value afterwards.