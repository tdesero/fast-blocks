import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

import inputControls from './components/inputControls';
import WidthWrapper from './components/WidthWrapper';
import { createRepeater } from './createRepeater';

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
		const createInputControlComponent = () => (
			<InputControl
				setFieldAttributes={setFieldAttributes}
				removeFieldAttributes={removeFieldAttributes}
				field={field}
				label={field.label}
				value={attributes[fieldName]}
			/>
		);

		if (InputControl === undefined) {
			console.error( field.input + ' Input does not exist');
			return;
		}

		const width = field.width || 1.0;

		if (field.location === 'inspector') {
			return (
				<InspectorControls>
					<PanelBody>
							{ createInputControlComponent() }
					</PanelBody>
				</InspectorControls>
			);
		} else {
			return (
				<WidthWrapper width={width}>
					{ createInputControlComponent() }
				</WidthWrapper>
			);
		}
	} else if (field.input === 'repeater') {
		return createRepeater({field, setAttributes, fieldName, attributes, props});
	}
}