import { RichText } from '@wordpress/block-editor';
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function RichTextInput( { value, label, setFieldAttributes } ) {
	return (
		<BaseControl>
			<label className="fbl_url-input__label">{ label }</label>
			<RichText
				className="fbl_rich-text"
				value={ value }
				onChange={ setFieldAttributes }
				placeholder={ __( 'Add text…' ) }
				inlineToolbar
			/>
		</BaseControl>
	);
}