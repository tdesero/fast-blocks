import { Card, CardBody, CardHeader, Popover } from '@wordpress/components';
import { createFieldControls } from './createFieldControls';

export function EditorPopover({ title, fields, EditProps, onClose }) {
	return (
    <Popover position="middle center" onClose={ onClose }>
      <Card className='fbl_card' size="small" style={{ width: 600 }}>
        <CardHeader className='fbl_block-title'>Block: {title}</CardHeader>
        <CardBody style={{ padding: '16px 14px' }}>
          {Object.entries(fields).map(([fieldName, field]) => {
            return createFieldControls(EditProps, fieldName, field);
          })}
        </CardBody>
      </Card>
    </Popover>
  );
}
