import { ColorPalette, BaseControl } from "@wordpress/components";

export function ColorPaletteInput({ value, field, label, setFieldAttributes }) {
	return (
		<BaseControl label={label}>
			<div style={{ maxWidth: 240 }}>
				<ColorPalette
					value={value.color}
					onChange={(newColor) => {
						// I want to be able to have it as an object NOT just the hex value
						const newColorObject = field.colors.find(
							(item) => item.color === newColor,
						);
						setFieldAttributes(newColorObject || {});
					}}
					colors={field.colors.map(({ color, name }) => ({ color, name }))}
				/>
			</div>
		</BaseControl>
	);
}
