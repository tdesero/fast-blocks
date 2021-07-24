import { CheckboxControl } from '@wordpress/components';

export function CheckboxInput( { value, label, setFieldAttributes } ) {
	return (
		<CheckboxControl
			label={ label }
			onChange={ setFieldAttributes }
			checked={ value }
		/>
	);
}
