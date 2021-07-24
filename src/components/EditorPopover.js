import { Card, CardBody, CardHeader, Popover, Button, Modal } from '@wordpress/components';
import { FieldControl } from './FieldControl';
import { useState } from '@wordpress/element';
import { edit } from '@wordpress/icons';
import { __ } from '@wordpress/i18n'; 

export function EditorPopover( { title, fields, editProps, isSelected } ) {
	/* only for popover */
	const [ popoverVisible, setPopoverVisible ] = useState( false );
	const hidePopover = () => {
		setPopoverVisible( () => false );
	};
	const showPopover = () => {
		setPopoverVisible( () => true );
	};

	const isSelectedClass = isSelected ? ' is-selected' : '';
	
	return (
		<div className={"fbl_edit-btn-overlay" + isSelectedClass}>
			<Button isPrimary icon={edit} onClick={showPopover} />
			{ popoverVisible && (
				<Modal title={'Block: '+ title} onRequestClose={ hidePopover } style={{ width: 600 }} shouldCloseOnClickOutside={false}>
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
					<Button isPrimary onClick={hidePopover}>Okay</Button>
				</Modal>
			)}
		</div>
	);
}
