import { RichText, BlockControls } from "@wordpress/block-editor";
import {
	BaseControl,
	SlotFillProvider,
	Popover,
	Slot,
	Fill,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

import countChars from "../../helpers/countChars";

const PopoverFix = ({ children }) => {
	return (
		<SlotFillProvider>
			{children}
			<Slot name="RichText.Toolbar" />
		</SlotFillProvider>
	);
};

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
			<BaseControl
				label={label}
				className={!isValid ? "components-base-control--error" : ""}
			>
				<PopoverFix>
					<RichText
						className="fbl_rich-text"
						value={value}
						allowedFormats={field.allowedFormats}
						onChange={setFieldAttributes}
						placeholder={__("Add text…")}
						inlineToolbar
					/>
				</PopoverFix>
				<Fill name="RichText.Toolbar">
					<BlockControls />
				</Fill>
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
