import { Editor } from '@tinymce/tinymce-react';
import { BaseControl } from '@wordpress/components';


/* TODO: Get this to work */
const ClassicEditor = ({ value, label, setFieldAttributes }) => {
  return (
    <BaseControl>
      <BaseControl label={label} />
      <Editor
         initialValue={value}
         onBlur={ (event) => setFieldAttributes(event.target.getContent())}
         init={{
           height: 500,
           menubar: false,
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
    </BaseControl>
  )
}

export default ClassicEditor;