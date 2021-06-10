import { InnerBlocks } from '@wordpress/block-editor';
import { Card, CardBody, CardHeader } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { useState } from '@wordpress/element';
import { createFieldControls } from './createFieldControls';

export function createEdit({options, name, children, fields}) {
	return (props) => {
		const { attributes, isSelected } = props;
		const [height, setHeight] = useState(0);

		const title = options && options.title ? options.title : name;

		return (
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
			>
				{/* show serversiderender only if it has no children, ssr does not work with children here */}
				{(isSelected || children) ?
					(
						<Card className='fbl_card'>
							<CardHeader className='fbl_block-title'>Block: {title}</CardHeader>
							<CardBody style={{ padding: '16px 14px' }}>
								{Object.entries(fields).map(([fieldName, field]) => {
									return createFieldControls(props, fieldName, field);
								})}

								{children && (
									<div style={{ border: '1px dashed grey', padding: '10px' }}>
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
						<ServerSideRender
							block={name}
							attributes={{ ...attributes }}
							httpMethod='POST' />
					)}
			</div>
		);
	};
}
