import { RichText, URLInputButton } from '@wordpress/block-editor';
import {  
  TextControl, 
  ToggleControl, 
  CheckboxControl, 
  SelectControl, 
  BaseControl, 
  Button,
  RangeControl, 
  TextareaControl, 
  DateTimePicker,
  Popover,
  Notice
} from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { useState } from '@wordpress/element';

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
  'email': ({ value, label, setFieldAttributes }) => {
    const [ isValid, setIsValid ] = useState(true);

    return (
      <>
        <TextControl
          type='email'
          label={label}
          value={value}
          onChange={setFieldAttributes}
          onBlur={(e) => {
            // Unfortunately without a form the browser doesn't check validity.
            // Regex was obviously to complicated, i just copied it from here: 
            // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const email = e.target.value;
            const isValid = re.test(String(email).toLowerCase());
            if ( !isValid && !(email === '') ) { 
              setIsValid( false );
              setFieldAttributes( '' ); // clean
            } else {
              setIsValid( true );
            }
          }}
        />
        { !isValid && <Notice status="error" isSmall isDismissible={false}>{ __('Invalid email address.') }</Notice>}
      </>
    );
  },
  'textarea': ({ value, label, setFieldAttributes }) => (
    <TextareaControl
      label={label}
      value={value}
      onChange={setFieldAttributes} 
    />
  ),
  'number': ({ value, label, setFieldAttributes }) => (
    <TextControl
      type="number"
      label={label}
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
  'url': ({ value, label, setFieldAttributes }) => (
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
  'date': ({ value, label, setFieldAttributes }) => {
    const CustomPopover = withState( {
      isVisible: false,
    } )( ({ isVisible, setState, children }) => {
      const open = () => {
        setState( () => ({ isVisible: true}));
      };
      const hide = () => {
        setState( () => ({ isVisible: false } ));
      };
      return (
        <div style={{position: 'relative'}}>
          <Button isSecondary onClick={ !isVisible ? open : null }>
              { value ? new Date(value).toLocaleString() : __('Date')}
          </Button>
          { isVisible && <Popover onClose={ hide } position="bottom left">{children}</Popover> }
        </div>
      );
    } );

    return (
      <BaseControl className='fbl_url-input'>
        <BaseControl 
          className='fbl_url-input__label'
          label={label} 
        />
        <CustomPopover>
          <div style={{ padding: 10 }}>
            <DateTimePicker 
              currentDate={value}
              onChange={setFieldAttributes}
            />
          </div>
        </CustomPopover>
      </BaseControl>
    )
  },
}

export default inputControls;