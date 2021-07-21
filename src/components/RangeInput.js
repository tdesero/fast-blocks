import { RangeControl } from '@wordpress/components';

export function RangeInput({ value, field, label, setFieldAttributes }) {
  return (
    <RangeControl
      label={label}
      value={value}
      onChange={setFieldAttributes}
      step={field.step}
      min={field.min}
      max={field.max} />
  );
}
