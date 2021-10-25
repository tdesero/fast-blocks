import { TextControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import countChars from "../../helpers/countChars";

export function TextInput({ value, label, setFieldAttributes, field }) {
	const [charCount, setCharCount] = useState(countChars(value));

	useEffect(() => {
		setCharCount(countChars(value));
	});

	const help = field.charLimit
		? `${__("Characters")}: ${charCount} / ${field.charLimit}`
		: undefined;

	const isValid = !(field.charLimit && charCount > field.charLimit);

	return (
		<TextControl
			className={!isValid ? "components-base-control--error" : ""}
			label={label}
			help={help}
			value={value}
			onChange={setFieldAttributes}
		/>
	);
}
