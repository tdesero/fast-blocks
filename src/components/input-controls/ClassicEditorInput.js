import { Editor } from "@tinymce/tinymce-react";
import { BaseControl } from "@wordpress/components";
import { select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

import countChars from "../../helpers/coundChars";

// make sure this tinymce is added in index.asset.php as dependency
import "@wordpress/tinymce";

export const ClassicEditorInput = ({
	value,
	label,
	setFieldAttributes,
	field,
}) => {
	const colors = select("core/block-editor").getSettings().colors;
	const colorMap = [];
	const [charCount, setCharCount] = useState(countChars(value));

	colors.forEach((color) => {
		colorMap.push(color.color.substring(1)); // first '#' letter needs to be deleted
		colorMap.push(color.slug);
	});

	useEffect(() => {
		setCharCount(countChars(value));
	});

	const help = field.charLimit
		? `${__("Characters")}: ${charCount} / ${field.charLimit}`
		: undefined;

	const isValid = !(field.charLimit && charCount > field.charLimit);

	return (
		<BaseControl className={!isValid ? "components-base-control--error" : ""}>
			<BaseControl label={label} />
			<Editor
				onEditorChange={(newValue) => {
					setFieldAttributes(newValue);
				}}
				value={value}
				plugins="lists textcolor colorpicker link"
				init={{
					height: 300,
					menubar: false,
					branding: false,
					textcolor_map: colorMap,
					toolbar:
						"undo redo formatselect " +
						"bold italic forecolor backcolor alignleft aligncenter " +
						"alignright alignjustify bullist numlist outdent indent " +
						"link unlink removeformat help",
					content_style:
						"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
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
		</BaseControl>
	);
};
