import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, BaseControl } from '@wordpress/components';
import { trash } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

const ImageUpload = ( { label, onSelect, onRemove, value } ) => (
	<MediaUploadCheck>
		<MediaUpload
			onSelect={ ( media ) => {
				console.log( media );
				onSelect( {
					id: media.id,
					sizes: media.sizes,
					url: media.url,
					alt: media.alt,
					title: media.title,
					description: media.description,
					caption: media.caption,
				} );
			} }
			allowedTypes={ [ 'image' ] }
			value={ value }
			render={ ( { open } ) => (
				<BaseControl>
					<BaseControl label={ label } />
					{ ! ( value && value.url ) ? (
						<Button onClick={ open } isPrimary>
							{ __( 'Open Media Library' ) }
						</Button>
					) : (
						<div className="fbl_img-preview-box">
							<img
								onClick={ open }
								src={ value.url }
								className="fbl_img-preview-box__img"
							/>
							<Button className="fbl_img-preview-box__btn" isPrimary isDestructive onClick={ onRemove } icon={trash}>
							</Button>
						</div>
					) }
				</BaseControl>
			) }
		/>
	</MediaUploadCheck>
);

export function ImageInput( {
	label,
	value,
	setFieldAttributes,
	removeFieldAttributes,
} ) {
	return (
		<ImageUpload
			onSelect={ setFieldAttributes }
			onRemove={ removeFieldAttributes }
			value={ value }
			label={ label }
		/>
	);
}
