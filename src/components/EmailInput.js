import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export function EmailInput( { value, label, setFieldAttributes } ) {
	const [ isValid, setIsValid ] = useState( true );

	return (
		<TextControl
			type="email"
			className={ ! isValid ? 'components-base-control--error' : '' }
			label={ label }
			value={ value }
			onChange={ setFieldAttributes }
			onFocus={ ( e ) => {
				e.target.reportValidity();
			} }
			onBlur={ ( e ) => {
				const isValid = e.target.checkValidity();
				setIsValid( isValid );
			} }
		/>
	);
}
