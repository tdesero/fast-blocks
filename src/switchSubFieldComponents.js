import { RichText, URLInputButton } from '@wordpress/block-editor';
import { TextControl, ToggleControl, SelectControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ImageUpload from './components/ImageUpload';

/**
 * Create different Components to make all subFields editable.
 * Very similar to switchComponents function
 * 
 * @param {Object} props - All props passed by edit function of block
 * @param {string} fieldName
 * @param {Object} field 
 * @returns 
 */
export function switchSubFieldComponents({ props, fieldName, field, subFieldName, subField, key }) {
	const { attributes, setAttributes } = props;

	function setSubAttributes(val) {
		const	before = attributes[fieldName].slice(0, key);
		const after = attributes[fieldName].slice(key + 1);
		setAttributes({
			[fieldName]: [
				...before,
				{
					...attributes[fieldName][key],
					[subFieldName]: val
				},
				...after
			]
		});
	}

	switch (subField.input) {
		case 'checkbox':
			return (
				<ToggleControl
					label={subField.label}
					onChange={setSubAttributes}
					checked={attributes[fieldName][key][subFieldName]} 
				/>
			);
		case 'text':
			return (
				<TextControl
					label={subField.label}
					value={attributes[fieldName][key][subFieldName]}
					onChange={setSubAttributes} 
				/>
			);
		case 'select':
			return (
				<SelectControl
					label={subField.label}
					value={attributes[fieldName][key][subFieldName]}
					onChange={setSubAttributes}
					options={field.options} 
				/>
			);
		case 'image':
			return (
				<ImageUpload
					onSelect={( media ) => {
						setSubAttributes({
							id: media.id,
							sizes: media.sizes,
							url: media.url,
							alt: media.alt,
						});
					}}
					onRemove={() => { setSubAttributes( undefined ) }}
					value={attributes[fieldName][key][subFieldName]}
					label={subField.label}
				/>
			);
		case 'richText':
			return (
					<BaseControl>
						<BaseControl label={subField.label} />
						<RichText
							className='fbl_rich-text'
							value={attributes[fieldName][key][subFieldName]}
							onChange={setSubAttributes}
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
						url={attributes[fieldName][key][subFieldName]}
						onChange={setSubAttributes}
					/>
					<small className='fbl_url-input__url'>{attributes[fieldName][key][subFieldName]}</small>
				</BaseControl>
			);
		default:
			return;
	}
}
