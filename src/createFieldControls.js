import { BaseControl, Button, Panel, PanelBody} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createSubFieldControls } from './createSubFieldControls';

import inputControls from './components/inputControls';
import WidthWrapper from './components/WidthWrapper';

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
export function createFieldControls(props, fieldName, field) {
	const { attributes, setAttributes } = props;

	const setFieldAttributes = (val) => {
		setAttributes({
			[fieldName]: val
		});
	}

	const removeFieldAttributes = () => { setAttributes( {[fieldName]: undefined } ) };

	if (field.input !== 'repeater') {
		const InputControl = inputControls[field.input];

		if (InputControl === undefined) {
			console.error( field.input + ' Input does not exist');
			return;
		}

		const width = field.width || 1.0;

		return (
			<WidthWrapper width={width}>
				<InputControl
					setFieldAttributes={setFieldAttributes}
					removeFieldAttributes={removeFieldAttributes}
					field={field}
					label={field.label}
					value={attributes[fieldName]}
				/>
			</WidthWrapper>
		);
	} else if (field.input === 'repeater') {

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
										return createSubFieldControls({
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
	}
}
