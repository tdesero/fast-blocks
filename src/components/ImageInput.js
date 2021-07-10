import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, BaseControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const ImageUpload = ({label, onSelect, onRemove, value}) => (
  <MediaUploadCheck>
    <MediaUpload
      onSelect={ (media) => { 
        console.log(media)
        onSelect({
          id: media.id,
          sizes: media.sizes,
          url: media.url,
          alt: media.alt,
          title: media.title,
          description: media.description,
          caption: media.caption
        })
      }}
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

export function ImageInput({ label, value, setFieldAttributes, removeFieldAttributes }) {
  return (
    <ImageUpload
      onSelect={setFieldAttributes}
      onRemove={removeFieldAttributes}
      value={value}
      label={label}
    />
  )
} 
