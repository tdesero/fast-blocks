import { RichText, URLInputButton } from '@wordpress/block-editor';
import { TextControl, ToggleControl, CheckboxControl, SelectControl, BaseControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ImageUpload from './ImageUpload';

const inputControls = {
  'checkbox': ({ value, label, setFieldAttributes }) => (
    <CheckboxControl
      label={label}
      onChange={setFieldAttributes}
      checked={value} 
    />
  ),
  'toggle': ({ value, label, setFieldAttributes }) => (
    <ToggleControl
      label={label}
      onChange={setFieldAttributes}
      checked={value} 
    />
  ),
	'text': ({ value, label, setFieldAttributes }) => (
    <TextControl
      label={label}
      value={value}
      onChange={setFieldAttributes} 
    />
  ),
  'number': ({ value, label, setFieldAttributes }) => (
    <TextControl
      label={label}
      type="number" 
      value={value}
      onChange={setFieldAttributes}
    />
  ),
  'range': ({ value, field, label, setFieldAttributes }) => ( 
    <RangeControl
      label={label}
      value={value}
      onChange={setFieldAttributes}
      min={field.min}
      max={field.max}
    />
   ),
	'select': ({ value, field, label, setFieldAttributes }) => (
    <SelectControl
      label={label}
      value={value}
      onChange={setFieldAttributes}
      options={field.options}
    />
  ),
	'image': ({ label, value, setFieldAttributes, removeFieldAttributes }) => (
    <ImageUpload
      onSelect={setFieldAttributes}
      onRemove={removeFieldAttributes}
      value={value}
      label={label}
    />
  ),
  'richText': ({ value, label, setFieldAttributes }) => (
    <BaseControl>
      <BaseControl label={label} />
      <RichText
        className='fbl_rich-text'
        value={value}
        onChange={setFieldAttributes}
        placeholder={__('Add text…')}
        inlineToolbar
      />
    </BaseControl>
  ),
	'url': ({ value, label, setFieldAttributes, attributes }) => (
    <BaseControl className='fbl_url-input'>
      <BaseControl 
        className='fbl_url-input__label'
        label={label} 
      />
      <URLInputButton
        url={value}
        onChange={setFieldAttributes}
      />
      <small className='fbl_url-input__url'>{value}</small>
    </BaseControl>
  ),
}

export default inputControls;