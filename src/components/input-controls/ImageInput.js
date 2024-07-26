import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
	Button,
	BaseControl,
	FocalPointPicker,
	Placeholder,
} from "@wordpress/components";
import { trash, image } from "@wordpress/icons";

import { __ } from "@wordpress/i18n";

const ImageUpload = ({ label, onSelect, onRemove, value, field }) => (
	<MediaUploadCheck>
		<MediaUpload
			onSelect={(media) => {
				console.log(media);
				onSelect({
					id: media.id,
					sizes: media.sizes,
					url: media.url,
					alt: media.alt,
					title: media.title,
					description: media.description,
					caption: media.caption,
					width: media.width,
					height: media.height,
					...(field.focalPointPicker ? { focalPoint: { x: 0.5, y: 0.5 } } : {}),
				});
			}}
			allowedTypes={["image"]}
			value={value}
			render={({ open }) => (
				<BaseControl label={label}>
					<div style={{ maxWidth: 240 }}>
						{!(value && value.url) ? (
							<Placeholder icon={image} label={__("Add Image")}>
								<Button onClick={open} variant="primary">
									{__("Open Media Library")}
								</Button>
							</Placeholder>
						) : field.focalPointPicker ? (
							<>
								<FocalPointPicker
									url={value.url}
									value={value.focalPoint}
									onChange={(focalPoint) => onSelect({ ...value, focalPoint })}
								/>
								<Button variant="tertiary" onClick={open}>
									{__("Replace")}
								</Button>
								<Button variant="tertiary" isDestructive onClick={onRemove}>
									{__("Remove")}
								</Button>
							</>
						) : (
							<div className="fbl_img-preview-box">
								<img
									onClick={open}
									src={value.url}
									className="fbl_img-preview-box__img"
								/>
								<Button
									className="fbl_img-preview-box__btn"
									variant="secondary"
									isDestructive
									onClick={onRemove}
									icon={trash}
								></Button>
							</div>
						)}
					</div>
				</BaseControl>
			)}
		/>
	</MediaUploadCheck>
);

export function ImageInput({
	label,
	value,
	setFieldAttributes,
	removeFieldAttributes,
	field,
}) {
	return (
		<ImageUpload
			onSelect={setFieldAttributes}
			onRemove={removeFieldAttributes}
			value={value}
			label={label}
			field={field}
		/>
	);
}
