import { Editor } from '@tinymce/tinymce-react';
import { BaseControl } from '@wordpress/components';
import { select } from '@wordpress/data';

// make sure this tinymce is added in index.asset.php as dependency
import '@wordpress/tinymce';

export const ClassicEditorInput = ( { value, label, setFieldAttributes } ) => {
	const colors = select('core/block-editor').getSettings().colors;
	const colorMap = [];

	colors.forEach( color => {
		colorMap.push( color.color.substring(1) ); // first '#' letter needs to be deleted
		colorMap.push( color.slug );
	})

	return (
		<BaseControl>
			<BaseControl label={ label } />
			<Editor
				onEditorChange={ ( newValue ) => {
					setFieldAttributes( newValue );
				} }
				value={ value }
				plugins="lists textcolor colorpicker"
				init={ {
					height: 300,
					menubar: false,
					branding: false,
					textcolor_map: colorMap,
					toolbar:
						'undo redo | formatselect | ' +
						'bold italic forecolor backcolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
					content_style:
						'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
				} }
			/>
		</BaseControl>
	);
};
