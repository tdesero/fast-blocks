import { URLInputButton } from "@wordpress/block-editor";
import { BaseControl } from "@wordpress/components";

export function URLInput({ value, label, setFieldAttributes }) {
	return (
		<BaseControl label={label}>
			<div className="fbl_url-input">
				<URLInputButton url={value} onChange={setFieldAttributes} />
				<small className="fbl_url-input__url">{value}</small>
			</div>
		</BaseControl>
	);
}
