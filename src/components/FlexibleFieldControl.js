import { useState } from '@wordpress/element';
import {
	BaseControl,
	Button,
	Card,
	CardBody,
	Dropdown,
	MenuGroup,
	MenuItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	Icon,
	trash,
	chevronUp,
	chevronDown,
	plusCircle,
	dragHandle,
	copy,
} from '@wordpress/icons';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { DndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import inputControls from './input-controls';

const createId = () =>
	`${ Date.now() }-${ Math.random().toString( 36 ).slice( 2 ) }`;

const cloneDefault = ( value ) => {
	if ( Array.isArray( value ) ) {
		return value.map( cloneDefault );
	}
	if ( value && typeof value === 'object' ) {
		return Object.fromEntries(
			Object.entries( value ).map( ( [ key, item ] ) => [
				key,
				cloneDefault( item ),
			] )
		);
	}
	return value;
};

const createItem = ( layoutName, layout ) => ( {
	fastBlockId: createId(),
	type: layoutName,
	data: Object.fromEntries(
		Object.entries( layout.fields || {} ).map( ( [ fieldName, field ] ) => [
			fieldName,
			cloneDefault( field.default ),
		] )
	),
} );

export function FlexibleFieldControl( {
	field,
	setAttributes,
	fieldName,
	attributes,
} ) {
	const layouts = field.layouts || {};
	const items = Array.isArray( attributes[ fieldName ] )
		? attributes[ fieldName ]
		: [];
	const updateItems = ( nextItems ) =>
		setAttributes( { [ fieldName ]: nextItems } );

	const addItem = ( layoutName ) => {
		if ( ! layoutName || ! layouts[ layoutName ] ) {
			return;
		}
		updateItems( [
			...items,
			createItem( layoutName, layouts[ layoutName ] ),
		] );
	};

	const removeItem = ( index ) => {
		updateItems( items.filter( ( _, itemIndex ) => itemIndex !== index ) );
	};

	const duplicateItem = ( index ) => {
		const duplicate = {
			...items[ index ],
			fastBlockId: createId(),
			data: cloneDefault( items[ index ].data ),
		};
		updateItems( [
			...items.slice( 0, index ),
			duplicate,
			...items.slice( index ),
		] );
	};

	const moveItem = ( index, direction ) => {
		const targetIndex = index + direction;
		if ( targetIndex < 0 || targetIndex >= items.length ) {
			return;
		}
		updateItems( arrayMove( items, index, targetIndex ) );
	};

	return (
		<BaseControl
			label={ field.label }
			id={ `${ fieldName }-flexible` }
			className="fbl_repeater-inputs"
		>
			<div className="fbl_repeater-inputs__inner">
				<div className="fbl_flexible-appender">
					<Dropdown
						className="fbl_flexible-appender__dropdown"
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								className="fbl_repeater-inputs__appender"
								icon={ plusCircle }
								onClick={ onToggle }
								aria-expanded={ isOpen }
								style={ {
									width: '100%',
									justifyContent: 'center',
									height: 48,
								} }
								variant="secondary"
								aria-label={ __( 'Add content' ) }
							>
								{ __( 'Add content' ) }
							</Button>
						) }
						renderContent={ ( { onToggle } ) => (
							<MenuGroup>
								{ Object.entries( layouts ).map(
									( [ layoutName, layout ] ) => (
										<MenuItem
											key={ layoutName }
											onClick={ () => {
												addItem( layoutName );
												onToggle();
											} }
										>
											{ layout.label || layoutName }
										</MenuItem>
									)
								) }
							</MenuGroup>
						) }
					/>
				</div>

				<DndContext
					onDragEnd={ ( { active, over } ) => {
						if ( ! over || active.id === over.id ) return;
						const activeIndex = items.findIndex(
							( { fastBlockId } ) => fastBlockId === active.id
						);
						const overIndex = items.findIndex(
							( { fastBlockId } ) => fastBlockId === over.id
						);
						if ( activeIndex !== -1 && overIndex !== -1 ) {
							updateItems(
								arrayMove( items, activeIndex, overIndex )
							);
						}
					} }
				>
					<SortableContext
						items={ items.map(
							( { fastBlockId } ) => fastBlockId
						) }
					>
						{ items.map( ( item, index ) => (
							<FlexibleCard
								key={
									item.fastBlockId ||
									`${ fieldName }_${ index }`
								}
								item={ item }
								index={ index }
								fieldName={ fieldName }
								layout={ layouts[ item.type ] }
								items={ items }
								updateItems={ updateItems }
								removeItem={ removeItem }
								duplicateItem={ duplicateItem }
								moveItem={ moveItem }
							/>
						) ) }
					</SortableContext>
				</DndContext>
			</div>
		</BaseControl>
	);
}

function FlexibleCard( {
	item,
	index,
	fieldName,
	layout,
	items,
	updateItems,
	removeItem,
	duplicateItem,
	moveItem,
} ) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable( { id: item.fastBlockId } );
	const [ isOpen, setIsOpen ] = useState( false );
	const style = {
		transform: CSS.Translate.toString( transform ),
		transition,
	};

	if ( ! layout ) return null;

	const setData = ( subFieldName, value ) => {
		updateItems(
			items.map( ( currentItem, itemIndex ) =>
				itemIndex === index
					? {
							...currentItem,
							data: {
								...currentItem.data,
								[ subFieldName ]: value,
							},
					  }
					: currentItem
			)
		);
	};

	return (
		<Card ref={ setNodeRef } style={ style }>
			<div
				className="fbl_repeater-card__header"
				onClick={ () => setIsOpen( ! isOpen ) }
			>
				<Icon
					icon={ dragHandle }
					className="fbl_repeater-card__drag-handle"
					{ ...attributes }
					{ ...listeners }
				/>
				<div className="fbl_repeater-card__title">
					{ layout.label || item.type } { index + 1 }
				</div>
				<div
					style={ {
						display: 'flex',
						marginLeft: 'auto',
						alignItems: 'center',
					} }
				>
					<Button
						icon={ chevronUp }
						disabled={ index === 0 }
						onClick={ ( event ) => {
							event.stopPropagation();
							moveItem( index, -1 );
						} }
					/>
					<Button
						icon={ chevronDown }
						disabled={ index === items.length - 1 }
						onClick={ ( event ) => {
							event.stopPropagation();
							moveItem( index, 1 );
						} }
					/>
					<Button
						icon={ copy }
						onClick={ ( event ) => {
							event.stopPropagation();
							duplicateItem( index );
						} }
					/>
					<Button
						icon={ trash }
						onClick={ ( event ) => {
							event.stopPropagation();
							removeItem( index );
						} }
					/>
					<Button
						icon={ isOpen ? chevronUp : chevronDown }
						onClick={ () => setIsOpen( ! isOpen ) }
					/>
				</div>
			</div>
			{ isOpen && (
				<CardBody>
					{ Object.entries( layout.fields || {} ).map(
						( [ subFieldName, subField ] ) => {
							const InputControl =
								inputControls[ subField.input ];
							if ( ! InputControl ) return null;
							return (
								<InputControl
									key={ subFieldName }
									setFieldAttributes={ ( value ) =>
										setData( subFieldName, value )
									}
									removeFieldAttributes={ () =>
										setData( subFieldName, undefined )
									}
									field={ subField }
									label={ subField.label }
									value={ item.data?.[ subFieldName ] }
								/>
							);
						}
					) }
				</CardBody>
			) }
		</Card>
	);
}
