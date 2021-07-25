import {
	BaseControl,
	Button,
	ButtonGroup,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { SubFieldControl } from './SubFieldControl';
import { arrowUp, arrowDown, trash } from '@wordpress/icons';

export function RepeaterFieldControl( {
	field,
	setAttributes,
	fieldName,
	attributes,
	editProps,
} ) {
	const addNew = () => {
		const newItem = {};
		Object.entries( field.query ).forEach( ( [ key, value ] ) => {
			newItem[ key ] = value.default;
		} );
		// this id is not perfect but should be good enough for now
		newItem.fastBlockId = new Date().valueOf();
		console.log( newItem );
		setAttributes( {
			[ fieldName ]: [ ...attributes[ fieldName ], newItem ],
		} );
	};

	const removeItem = ( index ) => {
		const attr = [ ...attributes[ fieldName ] ];
		attr.splice( index, 1 );
		setAttributes( { [ fieldName ]: attr } );
	};

	const isLast = ( index ) => index === attributes[ fieldName ].length - 1;

	const isFirst = ( index ) => index === 0;

	const moveUp = ( index ) => {
		if ( isFirst( index ) ) return;
		const attr = [ ...attributes[ fieldName ] ];
		const el = attr[ index ];
		attr[ index ] = attr[ index - 1 ];
		attr[ index - 1 ] = el;
		setAttributes( { [ fieldName ]: attr } );
	};

	const moveDown = ( index ) => {
		if ( isLast( index ) ) return;
		const attr = [ ...attributes[ fieldName ] ];
		const el = attr[ index ];
		attr[ index ] = attr[ index + 1 ];
		attr[ index + 1 ] = el;
		setAttributes( { [ fieldName ]: attr } );
	};

	return (
		<BaseControl className="fbl_repeater-inputs">
			<BaseControl label={ field.label } />
			<Panel>
				{ attributes[ fieldName ].map( ( attribute, index ) => {
					return (
						<PanelBody
							key={
								attribute.fastBlockId
									? `${ fieldName }_${ attribute.fastBlockId }`
									: `${ fieldName }_${ index }`
							}
							title={
								field.single
									? `${ field.single } ${ index + 1 }`
									: `Repeater ${ __( 'Item' ) } ${
											index + 1
									  }`
							}
							initialOpen={ false }
							buttonProps={ { style: { padding: '16px' } } }
						>
							<div className="fbl_repeater-btns">
								<Button
									onClick={ () => {
										moveUp( index );
									} }
									disabled={ isFirst( index ) }
									icon={ arrowUp }
								/>
								<Button
									onClick={ () => {
										moveDown( index );
									} }
									disabled={ isLast( index ) }
									icon={ arrowDown }
								/>
								<Button
									onClick={ () => {
										removeItem( index );
									} }
									icon={ trash }
								/>
							</div>
							{ Object.entries( attribute ).map(
								( [ subFieldName ] ) => {
									// first check if attribute was defined inside fields
									if ( field.query[ subFieldName ] ) {
										const props = {
											editProps,
											fieldName,
											field,
											subFieldName,
											subField:
												field.query[ subFieldName ],
											indexKey: index,
										}
										return <SubFieldControl { ...props } />;
									}
								}
							) }
						</PanelBody>
					);
				} ) }
			</Panel>
			{ ( ! field.limit ||
				field.limit > attributes[ fieldName ].length ) && (
				<Button
					onClick={ addNew }
					style={ { width: '100%', justifyContent: 'center' } }
					isSecondary
				>
					+
				</Button>
			) }
		</BaseControl>
	);
}
