import { BaseControl, Button, ButtonGroup, Panel, PanelBody, PanelRow} from '@wordpress/components';
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

	const removeFieldAttributes = () => { 
		setFieldAttributes( undefined );
	};

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
			// this id is not perfect but should be good enough for now
			newItem.fastBlockId = new Date().valueOf();
			console.log(newItem)
			setAttributes( { [fieldName]: [...attributes[fieldName], newItem] } );
		}

		const removeItem = (index) => {
			const attr = [ ...attributes[fieldName] ];
			attr.splice(index, 1);
			setAttributes( { [fieldName]: attr} );
		}

		const isLast = (index) => index === attributes[fieldName].length - 1;

		const isFirst = (index) => index === 0;

		const moveUp = (index) => {
			if ( isFirst(index) ) return;
			const attr = [ ...attributes[fieldName] ];
			const el = attr[index];
			attr[index] = attr[index-1];
			attr[index-1] = el;
			setAttributes( { [fieldName]: attr } );
		}

		const moveDown = (index) => {
			if ( isLast(index) ) return;
			const attr = [ ...attributes[fieldName] ];
			const el = attr[index];
			attr[index] = attr[index+1];
			attr[index+1] = el;
			setAttributes( { [fieldName]: attr } );
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
									key={attribute.fastBlockId ? `${fieldName}_${attribute.fastBlockId}` : `${fieldName}_${index}`}
									title={ field.single ? `${field.single} ${index + 1}` : `Repeater ${__('Item')} ${index + 1}`} 
									initialOpen={ false }
									buttonProps={{style: { padding: '16px'}}}
								>
									<PanelRow>
										<ButtonGroup>
											<Button onClick={() => { moveUp(index) }} isSmall isSecondary disabled={ isFirst(index) }>{__('Move up')}</Button>
											<Button onClick={() => { moveDown(index) }} isSmall isSecondary disabled={ isLast(index) }>{__('Move down')}</Button>
											<Button onClick={() => { removeItem(index) }} isSmall isDestructive >{__('Remove item')}</Button>
										</ButtonGroup>
									</PanelRow>
									{Object.entries(attribute).map( ([subFieldName]) => {
										// first check if attribute was defined inside fields
										if (field.query[subFieldName]) {
											return createSubFieldControls({
												props, 
												fieldName, 
												field, 
												subFieldName, 
												subField: field.query[subFieldName], 
												key: index
											});
										}
									})}
								</PanelBody>
							)
						})}
					</Panel>
				<Button onClick={addNew} style={{width: '100%', justifyContent: 'center'}} isSecondary>+</Button>
			</BaseControl>
		)
	}
}
