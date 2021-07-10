import { ToggleControl } from '@wordpress/components';

export function ToggleInput({ value, label, setFieldAttributes }) {
  return (
    <ToggleControl
      label={label}
      onChange={setFieldAttributes}
      checked={value} />
  );
}
