import { CheckboxInput } from './CheckboxInput';
import { ToggleInput } from './ToggleInput';
import { TextInput } from './TextInput';
import { EmailInput } from './EmailInput';
import { TextareaInput } from './TextareaInput';
import { NumberInput } from './NumberInput';
import { RangeInput } from './RangeInput';
import { SelectInput } from './SelectInput';
import { ImageInput } from './ImageInput';
import { RichTextInput } from './RichTextInput';
import { URLInput } from './URLInput';
import { DateInput } from './DateInput';
import { ClassicEditorInput } from './ClassicEditorInput';

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
	richText: RichTextInput,
	url: URLInput,
	date: DateInput,
	classicEditor: ClassicEditorInput,
};

export default inputControls;
