import { useSelect } from "@wordpress/data";
import { ComboboxControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

function sanitizeString(str) {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
}

export function PostTypeEntryInput({
	value,
	label,
	setFieldAttributes,
	field,
}) {
	const postType = sanitizeString(field.postType);
	const posts = useSelect((select) =>
		select("core").getEntityRecords("postType", postType, {
			per_page: -1,
		})
	);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		if (posts) {
			const newSuggestions = posts.slice().map((post) => {
				return { value: post.id, label: post.title.rendered };
			});
			setSuggestions(newSuggestions);
		}
	}, [posts]);

	return (
		<ComboboxControl
			label={label}
			value={value}
			onChange={(val) => {
				if (!val) {
					// i hope -1 is ok to return if no post is selected by the user
					setFieldAttributes(-1);
				} else {
					setFieldAttributes(val);
				}
			}}
			options={suggestions}
		/>
	);
}
