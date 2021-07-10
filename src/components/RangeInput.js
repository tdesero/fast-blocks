import { RangeControl } from '@wordpress/components';

export function RangeInput({ value, field, label, setFieldAttributes }) {
  return (
    <RangeControl
      label={label}
      value={value}
      onChange={setFieldAttributes}
      min={field.min}
      max={field.max} />
  );
}
