// helpers
function stripTags(str) {
	return str.replace(/<[^>]*>?/gm, "");
}

export default function countChars(str = "") {
	// i need to strip html tags first, as this will be richText
	return stripTags(str).split("").length;
}
