import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export function createSave({children, fields}) {
	return ({ attributes, className }) => {
		const blockProps = useBlockProps.save( {
			className,
		} );
		return (
			children ?
				<InnerBlocks.Content /> :
				(
					<div {...blockProps}>
						{Object.entries(fields).map(([fieldName, field]) => {
							/* Fallback Content to be saved inside the database/content for example for SEO Plugins etc.
							also important if you choose to disable the block or if it stops working */
							switch (field.input) {
								// for some fields it is likely, that there should be output
								case 'text':
								case 'textarea':
									if (typeof field.selector === "string") {
										// TODO: check if it is a valid tag
										const CustomTag = field.selector;
										return <CustomTag>{attributes[fieldName]}</CustomTag>;
									} else {
										return <p>{attributes[fieldName]}</p>;
									};
								case 'image':
									return (
										<img
											src={(typeof attributes[fieldName] === "object") && attributes[fieldName].url}
											alt={(typeof attributes[fieldName] === "object") && attributes[fieldName].alt} />
									);
								case 'richText': 
								case 'classicEditor': return (<RichText.Content value={attributes[fieldName]} />);
								default: return null; // by default don't output anything 
							}
						})}
					</div>
				)
		);
	};
}
