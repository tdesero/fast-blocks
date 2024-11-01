import { Editor } from "@tinymce/tinymce-react";
import { BaseControl, Button, Modal } from "@wordpress/components";
import { select, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

import countChars from "../../helpers/countChars";

// make sure this tinymce is added in index.asset.php as dependency
import "@wordpress/tinymce";

const ClassicEdit = ({ value, colorMap, setFieldAttributes }) => (
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
);

export const ClassicEditorInput = ({
	value,
	label,
	setFieldAttributes,
	field,
	editView,
}) => {
	const colors = select("core/block-editor").getSettings().colors;
	const colorMap = [];
	const [charCount, setCharCount] = useState(countChars(value));
	const [popoverVisible, setPopoverVisible] = useState(false);

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

	const { deviceType } = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType } = select("core/edit-post");

		const deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : undefined;

		return {
			deviceType: deviceType,
		};
	}, []);

	return (
		<BaseControl
			label={label}
			className={!isValid ? "components-base-control--error" : ""}
		>
			{(editView === "popover" || editView === "inspector" || deviceType === "Desktop")  ? (
				<ClassicEdit {...{ setFieldAttributes, value, colorMap }} />
			) : (
				<Button
					variant="primary"
					onClick={() => setPopoverVisible(!popoverVisible)}
				>
					{__("Edit")}
				</Button>
			)}
			{popoverVisible && (
				<Modal
					title={__("Edit")}
					onRequestClose={() => setPopoverVisible(false)}
					style={{ width: 600 }}
					shouldCloseOnClickOutside={false}
					overlayClassName="fbl_edit-overlay"
				>
					<ClassicEdit {...{ setFieldAttributes, value, colorMap }} />
				</Modal>
			)}
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
