import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { useCallback, useState, useEffect } from "react";

import {
	BaseControl,
	Button,
	ButtonGroup,
	Panel,
	PanelBody,
	PanelRow,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { SubFieldControl } from "./SubFieldControl";
import { arrowUp, arrowDown, trash } from "@wordpress/icons";

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
	CARD: "card",
};

export function ExperimentalRepeaterFieldControl(props) {
	return (
		<div>
			<DndProvider backend={HTML5Backend}>
				<Example {...props} />
			</DndProvider>
		</div>
	);
}

const cardStyle = {
	border: "1px dashed gray",
	padding: "0.5rem 1rem",
	marginBottom: ".5rem",
	backgroundColor: "white",
	cursor: "move",
};
export const Card = ({
	id,
	index,
	moveCard,
	attribute,
	field,
	fieldName,
	editProps,
}) => {
	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.CARD,
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			console.log("hoooover");
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CARD,
		item: () => {
			return { id, index };
		},
		canDrag: true,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));
	return (
		<div
			ref={ref}
			style={{ ...cardStyle, opacity }}
			data-handler-id={handlerId}
		>
			<PanelBody
				title={
					attribute.fastBlockId
					// field.single
					// 	? `${field.single} ${index + 1}`
					// 	: `Repeater ${__("Item")} ${index + 1}`
				}
				initialOpen={false}
				buttonProps={{ style: { padding: "16px" } }}
			>
				{Object.entries(attribute).map(([subFieldName]) => {
					// first check if attribute was defined inside fields
					if (field.query[subFieldName]) {
						const props = {
							editProps,
							fieldName,
							field,
							subFieldName,
							subField: field.query[subFieldName],
							indexKey: index,
						};
						return <SubFieldControl {...props} />;
					}
				})}
			</PanelBody>
		</div>
	);
};

const style = {
	width: 400,
};
export const Example = ({
	field,
	setAttributes,
	fieldName,
	attributes,
	editProps,
}) => {
	{
		const [items, setItems] = useState(attributes[fieldName]);
		console.log(items);

		const moveCard = useCallback((dragIndex, hoverIndex) => {
			console.log("moveCard");
			setItems((prevCards) =>
				update(prevCards, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, prevCards[dragIndex]],
					],
				}),
			);
		}, []);

		// useEffect(() => {
		// 	// update the items in the attributes object
		// 	setAttributes({ ...attributes, [fieldName]: items });
		// }, [items]);

		const renderCard = useCallback((card, index) => {
			return (
				<Card
					key={card.fastBlockId}
					index={index}
					id={card.fastBlockId}
					attribute={attributes[fieldName][index] || {}}
					field={field}
					fieldName={fieldName}
					editProps={editProps}
					moveCard={moveCard}
				/>
			);
		}, []);

		return (
			<>
				<div style={style}>{items.map((card, i) => renderCard(card, i))}</div>
			</>
		);
	}
};
