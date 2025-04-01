import { CheckboxInput } from "./CheckboxInput";
import { ToggleInput } from "./ToggleInput";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";
import { TextareaInput } from "./TextareaInput";
import { NumberInput } from "./NumberInput";
import { RangeInput } from "./RangeInput";
import { SelectInput } from "./SelectInput";
import { ImageInput } from "./ImageInput";
import { FileInput } from "./FileInput";
import { RichTextInput } from "./RichTextInput";
import { URLInput } from "./URLInput";
import { DateInput } from "./DateInput";
import { ClassicEditorInput } from "./ClassicEditorInput";
import { PostTypeEntryInput } from "./PostTypeEntryInput";
import { ColorPaletteInput } from "./ColorPaletteInput";
import { RadioInput } from "./RadioInput";
import { ColorPickerInput } from "./ColorPickerInput";

const inputControls = {
	checkbox: CheckboxInput,
	toggle: ToggleInput,
	text: TextInput,
	email: EmailInput,
	textarea: TextareaInput,
	number: NumberInput,
	range: RangeInput,
	select: SelectInput,
	image: ImageInput,
	file: FileInput,
	richText: RichTextInput,
	url: URLInput,
	date: DateInput,
	classicEditor: ClassicEditorInput,
	postTypeEntry: PostTypeEntryInput,
	color: ColorPickerInput,
	colorPalette: ColorPaletteInput,
	radio: RadioInput,
};

export default inputControls;
