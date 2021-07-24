import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

import inputControls from './input-controls';
import WidthWrapper from './WidthWrapper';
import { RepeaterFieldControl } from './RepeaterFieldControl';

/**
 * Create different Components to make all fields editable.
 * Basically checks the input value of a field and decides what component is needed
 * and which attributes should be set (e. g. for images it's usually a object containing url, alt etc.)
 *
 * @param {Object} props
 * @param {Object} props.editProps - All props passed by edit function of block
 * @param {string} props.fieldName
 * @param {Object} props.field
 * @return
 */
export function FieldControl( { editProps, fieldName, field } ) {
	const { attributes, setAttributes } = editProps;

	const setFieldAttributes = ( val ) => {
		setAttributes( {
			[ fieldName ]: val,
		} );
	};

	const removeFieldAttributes = () => {
		setFieldAttributes( undefined );
	};

	const createFieldControl = () => {
		const InputControl = inputControls[ field.input ];
		const createInputControlComponent = () => (
			<InputControl
				setFieldAttributes={ setFieldAttributes }
				removeFieldAttributes={ removeFieldAttributes }
				field={ field }
				label={ field.label }
				value={ attributes[ fieldName ] }
			/>
		);

		if ( InputControl === undefined ) {
			if ( field.input ) {
				/* this might look strange but the error should only log when there is a input defined at all */
				console.error(
					field.input +
						' Input does not exist inside field ' +
						fieldName
				);
			}
			return null;
		}

		const width = field.width || 1.0;

		if ( field.location === 'inspector' ) {
			return (
				<InspectorControls>
					<PanelBody>{ createInputControlComponent() }</PanelBody>
				</InspectorControls>
			);
		}
		return (
			<WidthWrapper width={ width }>
				{ createInputControlComponent() }
			</WidthWrapper>
		);
	}

	if ( field.input === 'repeater' ) {
		const props = {
			field,
			setAttributes,
			fieldName,
			attributes,
			editProps,
		}
		return <RepeaterFieldControl { ...props }  />;
	} else {
		return <>{ createFieldControl() }</>;
	}
}
