import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Card, CardBody, CardHeader, PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { useState } from '@wordpress/element';
import { createFieldControls } from './createFieldControls';
import { EditorPopover } from './EditorPopover';

export function createEdit({settings, name, children, fields, editWidth, editView}) {
	return (EditProps) => {
		const { attributes, isSelected } = EditProps;
		const [ height, setHeight ] = useState( 0 );

		const blockProps = useBlockProps( { style: { width: editWidth * 100 + '%' }} );
		const title = settings && settings.title ? settings.title : name;

		const [ popoverVisible, setPopoverVisible ] = useState( false );
		const hidePopover = () => {
			setPopoverVisible( () => false );
		}
		const showPopover = () => {
			setPopoverVisible( () => true );
		}

		const hasAdvancedEditView = (editView === 'popover') || (editView === 'inspector');

		return (
			<div {...blockProps} >
				<div
					className="fbl_editor-block"
					style={{ minHeight: height }}
					onMouseDown={(e) => {
						/* this should prevent scroll position jumping but there is probably a better way to do this */
						if (isSelected)
							return;
						e.currentTarget.style.minHeight = null;
						const currentHeight = e.currentTarget.offsetHeight;
						e.currentTarget.style.minHeight = currentHeight + 'px';
						setHeight(currentHeight);
					}}
					onBlur={() => {
						setHeight(0);
					}}
				>
					{/* show serversiderender only if it has no children, ssr does not work with children here */}
					{( (isSelected && !hasAdvancedEditView) || children ) ?
						(
							<Card className='fbl_card' size="small">
								<CardHeader className='fbl_block-title'>Block: {title}</CardHeader>
								<CardBody style={{ padding: '16px 14px' }}>
									{Object.entries(fields).map(([fieldName, field]) => {
										return createFieldControls(EditProps, fieldName, field);
									})}

									{children && (
										<div style={{ border: '1px dashed #ddd', padding: 0, borderRadius: 2 }}>
											<InnerBlocks
												allowedBlocks={children}
												orientation='horizontal'
												renderAppender={InnerBlocks.ButtonBlockAppender} />
										</div>
									)}
								</CardBody>
							</Card>
						) :
						(
							<div onClick={showPopover} style={{ border: '1px dashed #ddd', padding: 0, minHeight: 50 }}>
								{ (isSelected && editView === 'popover' && popoverVisible) && (
									<EditorPopover 
										title={title} 
										fields={fields} 
										EditProps={EditProps} 
										onClose={hidePopover} 
									/>
								)}
								<ServerSideRender
									block={name}
									attributes={{ ...attributes }}
									httpMethod='POST' 
								/>
								{ (isSelected && editView === 'inspector') && (
									<InspectorControls>
										<PanelBody>
											{Object.entries(fields).map(([fieldName, field]) => {
												return createFieldControls(EditProps, fieldName, field);
											})}
										</PanelBody>
									</InspectorControls>
								)}
							</div>
						)}
				</div>
			</div>
		);
	};
}

