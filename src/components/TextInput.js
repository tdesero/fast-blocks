import { TextControl } from '@wordpress/components';

export function TextInput( { value, label, setFieldAttributes } ) {
	return (
		<TextControl
			label={ label }
			value={ value }
			onChange={ setFieldAttributes }
		/>
	);
}
