import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, BaseControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const ImageUpload = ({attributes, setAttributes, fieldName, field}) => (
  <MediaUploadCheck>
    <MediaUpload
      onSelect={ ( media ) => {
        setAttributes( { 
          [fieldName]: {
            id: media.id,
            sizes: media.sizes,
            url: media.url,
            alt: media.alt,
          }
        } )
      } }
      allowedTypes={ [ 'image' ] }
      value={ attributes[fieldName] }
      render={ ( { open } ) => (
        <>
          <BaseControl label={field.label} />
          { !attributes[fieldName] ? (
            <Button onClick={ open } isPrimary>
              {__('Open Media Library')}
            </Button>
          ) : (
            <>
              <img 
                onClick={ open } 
                src={attributes[fieldName].url}
                style={{width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px', background: 'white'}}
              />
              <Button onClick={ () => { setAttributes( {[fieldName]: undefined } ) }} isSecondary>
                {__('Remove image')}
              </Button>
            </>
          )}
        </>
      ) }
    />
  </MediaUploadCheck>
);

export default ImageUpload;