# Documentation Fast Blocks Wordpress Plugin

## Available Field Inputs:
- `checkbox` (type: 'boolean')
- `toggle` (type: 'boolean')
- `text` (type: 'string') 
- `email` (type: 'string') 
- `textarea` (type: 'string')
- `number` (type: 'string')
- `range` (type: 'number')
- `select` (type: 'string' / 'number')
- `image` (type: 'object')
- `richText` (type: 'string')
- `url` (type: 'string')
- `date` (type: 'string')
- `classicEditor` (type: 'string') This is actually a TinyMCE Component

## Example inside functions.php of your theme:

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

add_fast_block( $options );
`