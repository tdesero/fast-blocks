import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, BaseControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const ImageUpload = ({label, onSelect, onRemove, value}) => (
  <MediaUploadCheck>
    <MediaUpload
      onSelect={ onSelect }
      allowedTypes={ [ 'image' ] }
      value={ value }
      render={ ( { open } ) => (
        <BaseControl>
          <BaseControl label={label} />
          { !(value && value.url) ? (
            <Button onClick={ open } isPrimary>
              {__('Open Media Library')}
            </Button>
          ) : (
            <>
              <img 
                onClick={ open } 
                src={value.url}
                style={{width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px', background: 'white'}}
              />
              <Button onClick={ onRemove } isSecondary>
                {__('Remove image')}
              </Button>
            </>
          )}
        </BaseControl>
      ) }
    />
  </MediaUploadCheck>
);

export default ImageUpload;