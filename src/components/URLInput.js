import { URLInputButton } from '@wordpress/block-editor';
import { BaseControl } from '@wordpress/components';

export function URLInput({ value, label, setFieldAttributes }) {
  return (
    <BaseControl className='fbl_url-input'>
      <BaseControl
        className='fbl_url-input__label'
        label={label} />
      <URLInputButton
        url={value}
        onChange={setFieldAttributes} />
      <small className='fbl_url-input__url'>{value}</small>
    </BaseControl>
  );
}
