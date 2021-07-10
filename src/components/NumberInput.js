import { TextControl } from '@wordpress/components';

export function NumberInput({ value, label, setFieldAttributes }) {
  return (
    <TextControl
      type="number"
      label={label}
      value={value}
      onChange={setFieldAttributes} />
  );
}
