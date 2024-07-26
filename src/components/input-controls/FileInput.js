import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, BaseControl, Placeholder } from "@wordpress/components";
import { trash, file } from "@wordpress/icons";

import { __ } from "@wordpress/i18n";

const MediaUploadComponent = ({ label, onSelect, onRemove, value }) => (
	<MediaUploadCheck>
		<MediaUpload
			onSelect={(media) => {
				console.log(media);
				onSelect({
					filename: media.filename,
					id: media.id,
					sizes: media.sizes,
					url: media.url,
					alt: media.alt,
					title: media.title,
					description: media.description,
					caption: media.caption,
				});
			}}
			value={value}
			render={({ open }) => (
				<BaseControl label={label}>
					<div style={{ maxWidth: 240 }}>
						{!value ? (
							<Placeholder icon={file} label={__("File")}>
								<Button onClick={open} isPrimary>
									{__("Open Media Library")}
								</Button>
							</Placeholder>
						) : (
							<div style={{ display: "inline-flex" }}>
								<Button isSecondary isOutline onClick={open}>
									{value.filename}
								</Button>
								<Button
									isPrimary
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

export function FileInput({
	label,
	value,
	setFieldAttributes,
	removeFieldAttributes,
}) {
	return (
		<MediaUploadComponent
			onSelect={setFieldAttributes}
			onRemove={removeFieldAttributes}
			value={value}
			label={label}
		/>
	);
}
