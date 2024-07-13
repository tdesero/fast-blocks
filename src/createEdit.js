import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { Card, CardBody, CardHeader, PanelBody } from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import { useState } from "@wordpress/element";
import { FieldControl } from "./components/FieldControl";
import { EditorPopover } from "./components/EditorPopover";
import { useSelect } from "@wordpress/data";

export function createEdit({
	settings,
	name,
	children,
	fields,
	editWidth,
	editView,
	childrenLimit,
	preview,
}) {
	return (editProps) => {
		const { attributes, isSelected, clientId } = editProps;
		const [height, setHeight] = useState(0);

		const blockProps = useBlockProps({
			style: { flexBasis: editWidth * 100 + "%" },
		});
		const title = settings && settings.title ? settings.title : name;

		/* AdvancedEditView means 'popover' oder 'inspector' for ALL fields */
		const hasAdvancedEditView =
			editView === "popover" || editView === "inspector";

		/* limit innerBlocks children (if it has children) */
		const innerBlockCount = useSelect(
			(select) => select("core/block-editor").getBlock(clientId).innerBlocks
		).length;
		const MyInnerBlocksAppender = () => {
			if (!childrenLimit || innerBlockCount < childrenLimit) {
				return InnerBlocks.ButtonBlockAppender;
			}
			return false;
		};
		const InnerBlocksAppenderToUse = MyInnerBlocksAppender();

		function allFieldControls(editProps) {
			return Object.entries(fields).map(([fieldName, field]) => {
				const props = { editProps, fieldName, field };
				return <FieldControl {...props} />;
			});
		}

		return (
			<div {...blockProps}>
				<div
					className="fbl_editor-block"
					style={{ minHeight: height }}
					onMouseDown={(e) => {
						/* this should prevent scroll position jumping for now but there is probably a better way to do this */
						if (isSelected) return;
						e.currentTarget.style.minHeight = null;
						const currentHeight = e.currentTarget.offsetHeight;
						e.currentTarget.style.minHeight = currentHeight + "px";
						setHeight(currentHeight);
					}}
					onBlur={() => {
						setHeight(0);
					}}
				>
					{/* show serversiderender only if it has no children, ssr does not work with children here */}
					{(isSelected && !hasAdvancedEditView) ||
					children ||
					preview === false ? (
						<Card className="fbl_card" size="small">
							<CardHeader className="fbl_block-title">
								Block: {title}
							</CardHeader>
							<CardBody style={{ padding: "16px 14px" }}>
								{allFieldControls(editProps)}

								{children && (
									<div
										style={{
											border: "1px dashed #ddd",
											padding: 0,
											borderRadius: 2,
										}}
									>
										<InnerBlocks
											allowedBlocks={
												// Can't set it to true, because it means ALL blocks are allowed including e.g. a single column
												Array.isArray(children) ? children : undefined
											}
											orientation="horizontal"
											renderAppender={InnerBlocksAppenderToUse}
										/>
									</div>
								)}
							</CardBody>
						</Card>
					) : (
						<div
							style={{
								border: "1px dashed #ddd",
								padding: 0,
								minHeight: 50,
							}}
						>
							{editView === "popover" && (
								<EditorPopover
									title={title}
									fields={fields}
									editProps={editProps}
									isSelected={isSelected}
								/>
							)}
							<div className="fbl_server-side-render">
								<ServerSideRender
									block={name}
									attributes={{ ...attributes }}
									httpMethod="POST"
								/>
							</div>
							{isSelected && editView === "inspector" && (
								<InspectorControls>
									<PanelBody>{allFieldControls(editProps)}</PanelBody>
								</InspectorControls>
							)}
						</div>
					)}
				</div>
			</div>
		);
	};
}
