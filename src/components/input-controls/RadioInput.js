import { RadioControl } from "@wordpress/components";

export function RadioInput({ value, field, label, setFieldAttributes }) {
	return (
		<RadioControl
			label={label}
			selected={value}
			onChange={setFieldAttributes}
			options={field.options}
		/>
	);
}
