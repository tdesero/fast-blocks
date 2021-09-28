import { TextareaControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import countChars from "../../helpers/coundChars";

export function TextareaInput({ value, label, setFieldAttributes, field }) {
	const [charCount, setCharCount] = useState(countChars(value));

	useEffect(() => {
		setCharCount(countChars(value));
	});

	const help = field.charLimit
		? `${__("Characters")}: ${charCount} / ${field.charLimit}`
		: undefined;

	const isValid = !(field.charLimit && charCount > field.charLimit);

	return (
		<TextareaControl
			className={!isValid ? "components-base-control--error" : ""}
			label={label}
			help={help}
			value={value}
			onChange={setFieldAttributes}
		/>
	);
}
