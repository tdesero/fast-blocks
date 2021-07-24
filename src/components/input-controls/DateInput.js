import {
	BaseControl,
	Button,
	DateTimePicker,
	Popover,
} from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

export function DateInput( { value, label, setFieldAttributes } ) {
	const CustomPopover = withState( {
		isVisible: false,
	} )( ( { isVisible, setState, children } ) => {
		const open = () => {
			setState( () => ( { isVisible: true } ) );
		};
		const hide = () => {
			setState( () => ( { isVisible: false } ) );
		};
		return (
			<div style={ { position: 'relative' } }>
				<Button isSecondary onClick={ ! isVisible ? open : null }>
					{ value
						? new Date( value ).toLocaleString()
						: __( 'Date' ) }
				</Button>
				{ isVisible && (
					<Popover onClose={ hide } position="bottom left">
						{ children }
					</Popover>
				) }
			</div>
		);
	} );

	return (
		<BaseControl className="fbl_url-input">
			<BaseControl className="fbl_url-input__label" label={ label } />
			<CustomPopover>
				<div style={ { padding: 10 } }>
					<DateTimePicker
						currentDate={ value }
						onChange={ setFieldAttributes }
					/>
				</div>
			</CustomPopover>
		</BaseControl>
	);
}
