import { Button, Modal } from '@wordpress/components';
import { FieldControl } from './FieldControl';
import { useState } from '@wordpress/element';
import { edit } from '@wordpress/icons';
import { __ } from '@wordpress/i18n'; 

export function EditorPopover( { title, fields, editProps, isSelected } ) {
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
			{ Object.entries( fields )
					.filter( ([ fieldName, field ]) => {
						return field.location === 'inspector';
					} )
					.map(
						( [ fieldName, field ] ) => {
							const props = {
								editProps,
								fieldName,
								field
							}
							return <FieldControl { ...props } />;
						}
					) }
			<Button isPrimary icon={edit} onClick={showPopover} />
			{ popoverVisible && (
				<Modal title={'Block: ' + title} onRequestClose={ hidePopover } style={{ width: 600 }} shouldCloseOnClickOutside={false}>
					{ Object.entries( fields )
							.filter( ([ fieldName, field ]) => {
								return field.location !== 'inspector';
							} )
							.map(
								( [ fieldName, field ] ) => {
									const props = {
										editProps,
										fieldName,
										field
									}
									return <FieldControl { ...props } />;
								}
							) }
					<div style={{ textAlign: 'right', marginTop: '2rem' }}>
						<Button isPrimary onClick={hidePopover}>Okay</Button>
					</div>
				</Modal>
			)}
		</div>
	);
}
