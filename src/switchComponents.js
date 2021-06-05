import { RichText, URLInputButton } from '@wordpress/block-editor';
import { TextControl, ToggleControl, SelectControl, BaseControl, Button, Panel, PanelBody} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ImageUpload from './components/ImageUpload';
import { switchSubFieldComponents } from './switchSubFieldComponents';

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
					onSelect={( media ) => {
						setAttributes( { 
							[fieldName]: {
								id: media.id,
								sizes: media.sizes,
								url: media.url,
								alt: media.alt,
							}
						} )
					}}
					onRemove={() => { setAttributes( {[fieldName]: undefined } ) }}
					value={attributes[fieldName]}
					label={field.label}
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
		case 'repeater':
			const addNew = () => {
				const newItem = {};
				Object.entries(field.query).forEach( ([key, value]) => {
					newItem[key] = value.default;
				});
				setAttributes( { [fieldName]: [...attributes[fieldName], newItem] } );
			}
			const removeItem = (index) => {
				const updatedAttr = [ ...attributes[fieldName] ];
				updatedAttr.splice(index, 1);
				setAttributes( { [fieldName]: updatedAttr } );
			}
			return (
				<BaseControl className='fbl_repeater-inputs'>
					<BaseControl
						label={field.label} 
					/>
						<Panel>
							{attributes[fieldName].map( (attribute, index) => {
								return (
									<PanelBody 
										key={fieldName + index}
										title={`Repeater ${__('Item')} ${index + 1}`} 
										initialOpen={ false }
										buttonProps={{style: { padding: '16px'}}}
									>
										{Object.entries(attribute).map( ([subFieldName]) => {
											return switchSubFieldComponents({
												props, 
												fieldName, 
												field, 
												subFieldName, 
												subField: field.query[subFieldName], 
												key: index
											});
										})}
										<Button onClick={() => { removeItem(index) }} isDestructive>{__('Remove item')}</Button>
									</PanelBody>
								)
							})}
						</Panel>
					<Button onClick={addNew} style={{width: '100%', justifyContent: 'center'}} isSecondary>+</Button>
				</BaseControl>
			)
		default:
			return;
	}
}
