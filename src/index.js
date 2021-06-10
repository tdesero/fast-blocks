import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import { createSave } from './createSave';
import { createEdit } from './createEdit';

/**
 * Register Blocks and automatically create an Editor UI
 * 
 * @param {string} name - Block name with slug e.g. my-slug/my-block
 * @param {Object} fields - All block attributes with a label and a input
 * 
 * TODO: learn how to document the following
 * @param fields.fieldName 
 * @param fields.fieldName.type
 * @param fields.fieldName.default
 * @param fields.fieldName.label
 * @param fields.fieldName.input 
 * @param fields.fieldName[selector] - optional selector
 * 
 * @param {Object} options - All options like in wp.blocks.registerBlockType but without(!) attributes: @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @param {array} [children] - Optional template for InnerBlocks
 */
function registerHelper( name, fields, options, children ) {
  const blockAttributes = {};

  for (const [fieldName, field] of Object.entries(fields)) {
    // copy relevant parts of the fields object to generate attributes
    const newValue = {};
    newValue.type = field.type;
    newValue.default = field.default;
    
    blockAttributes[fieldName] = newValue;
  }

  const edit = createEdit({options, name, children, fields});
  
	const save = createSave({children, fields});
	
  const blockObj = {
    edit,
    save,
		title: name, // fallback (usually overwritten by options.title)
    ...options,
    attributes: blockAttributes // ALWAYS uses attributes generated by fields object
  }
	registerBlockType(name, blockObj);
}

/**
 * Register All Blocks that are added with the PHP helper function add_fast_block
 * const fastBlockBlocks is made available with PHP
 */
Object.values(fastBlockBlocks).forEach( block => {
  registerHelper(block.name, block.fields, block.settings, block.children);
})