import { Card, CardBody, CardHeader, Popover } from '@wordpress/components';
import { FieldControl } from './FieldControl';

export function EditorPopover( { title, fields, editProps, onClose } ) {
	return (
		<Popover position="middle center" onClose={ onClose }>
			<Card className="fbl_card" size="small" style={ { width: 600 } }>
				<CardHeader className="fbl_block-title">
					Block: { title }
				</CardHeader>
				<CardBody style={ { padding: '16px 14px' } }>
					{ Object.entries( fields ).map(
						( [ fieldName, field ] ) => {
							const props = {
								editProps,
								fieldName,
								field
							}
							return <FieldControl { ...props } />;
						}
					) }
				</CardBody>
			</Card>
		</Popover>
	);
}
