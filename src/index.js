import { registerBlockType, createBlock } from "@wordpress/blocks";

import "./editor.scss";
import { createSave } from "./createSave";
import { createEdit } from "./createEdit";
import { deprecated } from "./deprecated";

/**
 * Register Blocks and automatically create an Editor UI
 *
 * @param {Object} block - All block attributes with a label and a input
 * @param {string} block.name - e.g. mytheme/my-block
 * @param {Object} block.fields - { type, default, label, input, [selector], [width] }
 * @param {Object} block.settings - All options like in wp.blocks.registerBlockType but without(!) attributes, edit & save: @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @param {Array} [block.children] - Optional template for InnerBlocks
 * @param {string} [block.editView] - Optional setting for editing UI
 * @param {number} [block.editWidth] - Width of block inside editor. Usefull for children Blocks.
 */
function registerHelper(block) {
	const { name, settings, children, allowTransformFrom } = block;
	const fields = block.fields || [];

	const blockAttributes = {};

	for (const [fieldName, field] of Object.entries(fields)) {
		// copy relevant parts of the fields object to generate attributes
		const attr = {};
		attr.type = field.type;
		attr.default = field.default;

		blockAttributes[fieldName] = attr;
	}

	const edit = createEdit({ fields, ...block });
	const save = createSave({ children, fields });

	// allow transforms
	if (allowTransformFrom) {
		settings.transforms = {
			from: [
				{
					type: "block",
					blocks: allowTransformFrom,
					transform: (attributes, innerBlocks) =>
						createBlock(name, attributes, innerBlocks),
				},
			],
		};
	}

	const blockObj = {
		apiVersion: 2,
		edit,
		save,
		title: name, // fallback (usually overwritten by options.title)
		...settings,
		attributes: blockAttributes, // ALWAYS uses attributes generated by fields object
		deprecated: deprecated({
			attributes: blockAttributes,
			children,
			fields,
			settings,
		}),
	};
	registerBlockType(name, blockObj);
}

/**
 * Register All Blocks that are added with the PHP helper function add_fast_block
 * const fastBlockBlocks is made available with PHP
 */
Object.values(fastBlockBlocks).forEach((block) => {
	registerHelper(block);
});
