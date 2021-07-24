import { SelectControl } from '@wordpress/components';

export function SelectInput( { value, field, label, setFieldAttributes } ) {
	return (
		<SelectControl
			label={ label }
			value={ value }
			onChange={ setFieldAttributes }
			options={ field.options }
		/>
	);
}
