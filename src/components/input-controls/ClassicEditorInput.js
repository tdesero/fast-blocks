import { Editor } from '@tinymce/tinymce-react';
import { BaseControl } from '@wordpress/components';

/* TODO: Get this to work */
export const ClassicEditorInput = ( { value, label, setFieldAttributes } ) => {
	return (
		<BaseControl>
			<BaseControl label={ label } />
			<Editor
				onEditorChange={ ( newValue ) => {
					setFieldAttributes( newValue );
				} }
				value={ value }
				plugins="lists"
				init={ {
					height: 300,
					menubar: false,
					branding: false,
					toolbar:
						'undo redo | formatselect | ' +
						'bold italic backcolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
					content_style:
						'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
				} }
			/>
		</BaseControl>
	);
};
