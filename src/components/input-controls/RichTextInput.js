import { RichText } from "@wordpress/block-editor";
import { BaseControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

import countChars from "../../helpers/coundChars";

export function RichTextInput({ value, label, setFieldAttributes, field }) {
	const [charCount, setCharCount] = useState(countChars(value));

	useEffect(() => {
		setCharCount(countChars(value));
	});

	const help = field.charLimit
		? `${__("Characters")}: ${charCount} / ${field.charLimit}`
		: undefined;

	const isValid = !(field.charLimit && charCount > field.charLimit);

	return (
		<>
			<BaseControl className={!isValid ? "components-base-control--error" : ""}>
				<label className="fbl_url-input__label">{label}</label>
				<RichText
					className="fbl_rich-text"
					value={value}
					onChange={setFieldAttributes}
					placeholder={__("Add text…")}
					inlineToolbar
				/>
			</BaseControl>
			{field.charLimit && (
				<p
					style={{
						fontStyle: "normal",
						color: "rgb(117, 117, 117)",
						fontSize: 12,
					}}
				>
					{help}
				</p>
			)}
		</>
	);
}
