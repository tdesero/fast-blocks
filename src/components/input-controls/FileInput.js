import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, BaseControl, FormFileUpload } from "@wordpress/components";
import { trash } from "@wordpress/icons";

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
				<BaseControl>
					<BaseControl label={label} />
					{!value ? (
						<Button onClick={open} isPrimary>
							{__("Open Media Library")}
						</Button>
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
