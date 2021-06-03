import { RichText, URLInputButton } from '@wordpress/block-editor';
import { TextControl, ToggleControl, SelectControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ImageUpload from './components/ImageUpload';

/**
 * Create different Components to make all fields editable.
 * Basically checks the input value of a field and decides what component is needed
 * and which attributes should be set (e. g. for images it's usually a object containing url, alt etc.)
 * 
 * @param {Object} props - All props passed by edit function of block
 * @param {string} fieldName
 * @param {Object} field 
 * @returns 
 */
export function switchComponents(props, fieldName, field) {
	const { attributes, setAttributes } = props;

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
					checked={attributes[fieldName]} 
				/>
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
					}} 
				/>
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
					options={field.options} 
				/>
			);
		case 'image':
			return (
				<ImageUpload
					attributes={attributes}
					setAttributes={setAttributes}
					field={field}
					fieldName={fieldName} 
				/>
			);
		case 'richText':
			return (
					<BaseControl>
						<BaseControl label={field.label} />
						<RichText
							className='fbl_rich-text'
							value={attributes[fieldName]}
							onChange={ text => {
								setAttributes({
									[fieldName]: text
								});
							}}
							placeholder={__('Add text…')}
							inlineToolbar />
					</BaseControl>
			);
		case 'url':
			return (
				<BaseControl className='fbl_url-input'>
					<BaseControl 
						className='fbl_url-input__label'
						label={field.label} 
					/>
					<URLInputButton
						url={attributes[fieldName]}
						onChange={ url => {
							setAttributes({
								[fieldName]: url
							});
						}}
					/>
					<small className='fbl_url-input__url'>{attributes[fieldName]}</small>
				</BaseControl>
			);
		default:
			return;
	}
}
