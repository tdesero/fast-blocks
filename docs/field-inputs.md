# Field Inputs

Fields require value for `type`, `input` and `default`.
You can optionally provide a 
- `label`,
- `width` (e.g. `.5` for 50%) and a 
- `location` to move the field from to block to the `inspector`

## Available Field Inputs:
- `checkbox` (type: 'boolean')
- `toggle` (type: 'boolean')
- `text` (type: 'string') optionally set a `charLimit`
- `email` (type: 'string') 
- `textarea` (type: 'string') optionally set a `charLimit`
- `number` (type: 'string' / 'number')
- `range` (type: 'number') you can also add `min`, `max` and `step`
- `select` (type: 'string' / 'number')
- `image` (type: 'object')
- `file` (type: 'object')
- `richText` (type: 'string') optionally set a `charLimit`
- `url` (type: 'string')
- `date` (type: 'string')
- `classicEditor` (type: 'string') This is actually a TinyMCE Component. Optionally set a `charLimit`
- `repeater` a more complex field with subfields. you can optionally `limit` these.
- `postTypeEntry` (type: 'number') provide a `postType` to be able to search for entries.

## Options:

## `checkbox`, `toggle`

```php
'my_checkbox' => [
    'type'    => 'boolean',
    'input'   => 'checkbox', // or 'toggle'
    'default' => false,
],
```

## `text`, `email`, `textarea`, `richText`, `classicEditor`

```php
'my_text' => [
    'label'     => 'kleiner Text',
    'type'      => 'string',
    'input'     => 'text', // or 'email', 'textarea', 'richText', 'classicEditor'
    'default'   => 'Überschrift einfügen',
    'charLimit' => 100
],
```

## `select`

```php
'my_select' => [
    'label'   => 'Background',
    'type'    => 'string',
    'default' => 'light',
    'input'	  => 'select',
    'options' => [
        ['label' => 'light', 'value' => 'light'],
        ['label' => 'dark', 'value' => 'dark'],
    ]
],
```

## `image`

```php
'my_image'     => [
    'label'   => 'Bild',
    'type'    => 'object',
    'input'   => 'image',
    // default can also be an empty array []
    'default' => [
        // this is also what you will receive in the template when calling $block->field_value
        'url'   => '<url-to-the-image>',
        'alt'   => '',
        'sizes' => [/* ... */],
    ],
],
```

## `file`

```php
'my_file'     => [
    'label'   => 'File',
    'type'    => 'object',
    'input'   => 'file',
    // default can also be an empty array []
    'default' => [
        // this is also what you will receive in the template when calling $block->field_value
        'filename' => 'my-file.pdf',
        'id' => 22,
        'url' => 'http://...my-file.pdf',
        'alt' => 'alt text',
        'title' => 'title'
        'description' => 'desc'
        'caption' => 'caption'
    ],
],
```

## `postTypeEntry`

```php
'my_post' => [
    'type' => 'number',
    'input' => 'postTypeEntry',
    'postType' => 'post'
]
```