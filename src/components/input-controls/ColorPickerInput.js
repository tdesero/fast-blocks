import {
	ColorPicker,
	BaseControl,
	Button,
	Popover,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const CustomPopover = ({ children, value }) => {
	const [isVisible, setIsVisible] = useState(false);

	const hide = () => setIsVisible(false);

	return (
		<Button
			variant="secondary"
			onClick={() => {
				setIsVisible(!isVisible);
			}}
		>
			<div style={{ display: "flex", gap: "0.5rem" }}>
				<span
					style={{
						borderRadius: "50%",
						width: "1rem",
						height: "1rem",
						backgroundColor: value,
						border: "1px solid rgba(0,0,0,0.25)",
					}}
				></span>{" "}
				{value}
			</div>
			{isVisible && (
				<Popover onClose={hide}>
					{children}
				</Popover>
			)}
		</Button>
	);
};

export function ColorPickerInput({ value, field, label, setFieldAttributes }) {
	return (
		<BaseControl label={label}>
			<CustomPopover value={value}>
				<ColorPicker
					color={value}
					onChange={(color) => {
						setFieldAttributes(color);
					}}
					style={{ overflow: "hidden" }}
					enableAlpha
					defaultValue={value || "#000"}
				/>
			</CustomPopover>
		</BaseControl>
	);
}
