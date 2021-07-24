import { __ } from '@wordpress/i18n';
import inputControls from './input-controls';

/**
 * Create different Components to make all subFields editable.
 * Very similar to switchComponents function
 *
 * @param {Object} props - All props passed by edit function of block
 * @param props.editProps
 * @param props.fieldName
 * @param props.field
 * @param props.subFieldName
 * @param props.subField
 * @param props.key
 * @return
 */
export function SubFieldControl( {
	editProps,
	fieldName,
	field,
	subFieldName,
	subField,
	indexKey,
} ) {
	const { attributes, setAttributes } = editProps;

	const setSubFieldAttributes = ( val ) => {
		const before = attributes[ fieldName ].slice( 0, indexKey );
		const after = attributes[ fieldName ].slice( indexKey + 1 );
		setAttributes( {
			[ fieldName ]: [
				...before,
				{
					...attributes[ fieldName ][ indexKey ],
					[ subFieldName ]: val,
				},
				...after,
			],
		} );
	};

	const removeSubFieldAttributes = () => {
		setSubFieldAttributes( undefined );
	};

	const InputControl = inputControls[ subField.input ];

	return (
		<InputControl
			setFieldAttributes={ setSubFieldAttributes }
			removeFieldAttributes={ removeSubFieldAttributes }
			field={ subField }
			label={ subField.label }
			value={ attributes[ fieldName ][ indexKey ][ subFieldName ] }
		/>
	);
}
