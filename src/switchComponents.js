import { RichText } from '@wordpress/block-editor';
import { TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ImageUpload from './components/ImageUpload';

export function switchComponents(field, setAttributes, fieldName, attributes, props) {
	switch (field.input) {
		case 'checkbox':
			return (
				<ToggleControl
					label={field.label}
					onChange={(e) => {
						setAttributes({
							[fieldName]: !attributes[fieldName]
						});
					}}
					checked={attributes[fieldName]} />
			);
		case 'text':
			return (
				<TextControl
					label={field.label}
					value={attributes[fieldName]}
					onChange={(text) => {
						setAttributes({
							[fieldName]: text
						});
					}} />
			);
		case 'select':
			return (
				<SelectControl
					label={field.label}
					value={attributes[fieldName]}
					onChange={(val) => {
						setAttributes({
							[fieldName]: val
						});
					}}
					options={field.options} />
			);
		case 'image':
			return (
				<ImageUpload
					attributes={attributes}
					setAttributes={setAttributes}
					field={field}
					fieldName={fieldName} />
			);
		case 'richText':
			console.log(props);
			return (
				<>
					<p>{field.label}</p>
					<RichText
						className='components-text-control__input'
						style={{ marginBottom: '24px' }}
						value={attributes[fieldName]}
						onChange={(text) => {
							setAttributes({
								[fieldName]: text
							});
						}}
						placeholder={__('Add text…')}
						inlineToolbar />
				</>
			);
		default:
			return;
	}
}
