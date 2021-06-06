import { __ } from '@wordpress/i18n';
import inputControls from './components/inputControls';

/**
 * Create different Components to make all subFields editable.
 * Very similar to switchComponents function
 * 
 * @param {Object} props - All props passed by edit function of block
 * @param {string} fieldName
 * @param {Object} field 
 * @returns 
 */
export function createSubFieldControls({ props, fieldName, field, subFieldName, subField, key }) {
	const { attributes, setAttributes } = props;

	const setSubFieldAttributes = (val) => {
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

	const removeSubFieldAttributes = () => {
		setSubFieldAttributes(undefined);
	}

	const InputControl = inputControls[subField.input];

	return (
		<InputControl
			setFieldAttributes={setSubFieldAttributes}
			removeFieldAttributes={removeSubFieldAttributes}
			field={subField}
			label={subField.label}
			value={attributes[fieldName][key][subFieldName]}
		/>
	);

}
