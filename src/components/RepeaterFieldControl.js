import { useState } from "@wordpress/element";
import { BaseControl, Button, Card, CardBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { SubFieldControl } from "./SubFieldControl";
import {
	Icon,
	trash,
	chevronUp,
	chevronDown,
	plusCircle,
	dragHandle,
} from "@wordpress/icons";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function RepeaterFieldControl({
	field,
	setAttributes,
	fieldName,
	attributes,
	editProps,
}) {
	const addNew = () => {
		const newItem = {};
		Object.entries(field.query).forEach(([key, value]) => {
			newItem[key] = value.default;
		});
		// this id is not perfect but should be good enough for now
		newItem.fastBlockId = new Date().valueOf();
		console.log(newItem);
		setAttributes({
			[fieldName]: [...attributes[fieldName], newItem],
		});
	};

	const removeItem = (index) => {
		const attr = [...attributes[fieldName]];
		attr.splice(index, 1);
		setAttributes({ [fieldName]: attr });
	};

	const isLast = (index) => index === attributes[fieldName].length - 1;

	const isFirst = (index) => index === 0;

	const moveUp = (index) => {
		if (isFirst(index)) return;
		const attr = [...attributes[fieldName]];
		const el = attr[index];
		attr[index] = attr[index - 1];
		attr[index - 1] = el;
		setAttributes({ [fieldName]: attr });
	};

	const moveDown = (index) => {
		if (isLast(index)) return;
		const attr = [...attributes[fieldName]];
		const el = attr[index];
		attr[index] = attr[index + 1];
		attr[index + 1] = el;
		setAttributes({ [fieldName]: attr });
	};

	const onDndMove = (newItems) => {
		setAttributes({ [fieldName]: newItems });
	};

	return (
		<BaseControl label={field.label} className="fbl_repeater-inputs">
			<div className="fbl_repeater-inputs__inner">
				<DndContext
					onDragEnd={({ active, over }) => {
						if (over && active.id !== over?.id) {
							const activeIndex = attributes[fieldName].findIndex(
								({ fastBlockId }) => fastBlockId === active.id,
							);
							const overIndex = attributes[fieldName].findIndex(
								({ fastBlockId }) => fastBlockId === over.id,
							);

							onDndMove(
								arrayMove(attributes[fieldName], activeIndex, overIndex),
							);
						}
					}}
				>
					<SortableContext
						items={attributes[fieldName].map((i) => i.fastBlockId)}
					>
						{attributes[fieldName].map((attribute, index) => {
							const props = {
								attribute,
								fieldName,
								index,
								field,
								moveUp,
								isFirst,
								moveDown,
								isLast,
								removeItem,
								editProps,
							};
							return <RepeaterCard {...props} />;
						})}
					</SortableContext>
				</DndContext>

				{(!field.limit || field.limit > attributes[fieldName].length) && (
					<Button
						icon={plusCircle}
						onClick={addNew}
						style={{ width: "100%", justifyContent: "center", height: 48 }}
						variant="secondary"
						aria-label={__("Add Item")}
					></Button>
				)}
			</div>
		</BaseControl>
	);
}
function RepeaterCard({
	attribute,
	fieldName,
	index,
	field,
	moveUp,
	isFirst,
	moveDown,
	isLast,
	removeItem,
	editProps,
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: attribute.fastBlockId });

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Card
			ref={setNodeRef}
			style={style}
			key={
				attribute.fastBlockId
					? `${fieldName}_${attribute.fastBlockId}`
					: `${fieldName}_${index}`
			}
		>
			<div
				className="fbl_repeater-card__header"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<Icon icon={dragHandle} {...attributes} {...listeners} />
				{field.single
					? `${field.single} ${index + 1}`
					: `Repeater ${__("Item")} ${index + 1}`}

				<div style={{ display: "flex", marginLeft: "auto" }}>
					{isOpen && (
						<div style={{ display: "flex", flexDirection: "column" }}>
							<Button
								onClick={(e) => {
									e.stopPropagation();
									moveUp(index);
								}}
								disabled={isFirst(index)}
								icon={chevronUp}
								style={{ height: 18 }}
							/>
							<Button
								onClick={(e) => {
									e.stopPropagation();
									moveDown(index);
								}}
								disabled={isLast(index)}
								icon={chevronDown}
								style={{ height: 18 }}
							/>
						</div>
					)}
					<Button
						onClick={(e) => {
							e.stopPropagation();
							removeItem(index);
						}}
						icon={trash}
					/>
					<Button
						icon={isOpen ? chevronUp : chevronDown}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					></Button>
				</div>
			</div>
			{isOpen && (
				<CardBody initialOpen={false}>
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
				</CardBody>
			)}
		</Card>
	);
}
