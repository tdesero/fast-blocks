# Examples

## Example inside `functions.php` of your theme:

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
      'charLimit' => 120 //optionallyy
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

## Example usage inside template:
use `$block->field('yourFieldName')` to echo the field directly. The field will will be sanitized with wp_kses_post()
use `$block->field_value('yourFieldName')` to get the value without echoing. Usefull for stored objects or arrays. You will have to sanitize on your own

```html
<div>
  <h2><?php $block->field('headline'); ?></h2>
  <img src="<?php echo $block->field_value('image')['url']; ?>"><!-- CAUTION: in production you should sanitize the value -->
</div>
```

# Example for a simple Row and Columns

```php 
add_fast_block([
  'name'          => 'bs/row',
  'template'      => '/blocks/row.php',
  'settings' => [
    'title' => 'Spalten',
    'supports' => [
      'color' => [
        'background' => true,
        'text' => false,
      ]
    ]
  ],
  'children'      => ['bs/col-3', 'bs/col-6'],
  'childrenLimit' => 6,
]);

add_fast_block([
  'name'      => 'bs/col-3',
  'template'  => '/blocks/col-3.php',
  'settings' => [
    'title' => 'Spalte Schmal',
    'parent' => ['bs/row']
  ],
  'children'  => true, // true means all are allowed
  'editWidth' => 4 / 12,
  'allowTransformFrom' => ['bs/col-6']
]);

// ...bs/col-6 would be more or less the same as bs/col-3
```

```html
<div class="row">
  <?php echo $children; ?>
</div>
```

```html
<div class="col-3">
  <?php echo $children; ?>
</div>
```