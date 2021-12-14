# Fast Blocks

Use the function `add_fast_block` to add a block to your theme in PHP. The Plugin automatically creates a interface for your block inside the editor.
Unlike the default block behaviour all blocks are rendered dynamically. This means changes inside the template are shown immediately without resaving the post or page.

## Example Usage

Register your block:

```php
$options = [
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

add_fast_block( $options );
```

Available inputs: `text`, `richText`, `checkbox`, `toggle`, `select`, `image`, `url`, `email`, `date`.
At the moment default values are mandatory.

Example usage inside template:

```html
<div>
	<h2><?php $block->field('headline'); ?></h2>
	<img src="<?php echo $block->field_value('image')['url']; ?>" />
</div>
```

For `$block->field` function sanitizing is done with `wp_kses_post`. If you
need more complex sanitizing, use `$block->field_value`, sanitize on your own
and `echo` the value afterwards.
