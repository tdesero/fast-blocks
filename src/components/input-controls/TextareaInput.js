import { TextareaControl } from '@wordpress/components';

export function TextareaInput( { value, label, setFieldAttributes } ) {
	return (
		<TextareaControl
			label={ label }
			value={ value }
			onChange={ setFieldAttributes }
		/>
	);
}
