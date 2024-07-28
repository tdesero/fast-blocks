import { useState } from "@wordpress/element";
import {
	BaseControl,
	Button,
	ButtonGroup,
	Panel,
	PanelBody,
	PanelRow,
	Card,
	CardHeader,
	CardBody,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { SubFieldControl } from "./SubFieldControl";
import {
	Icon,
	arrowUp,
	arrowDown,
	trash,
	chevronUp,
	chevronDown,
	plus,
} from "@wordpress/icons";

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

	return (
		<BaseControl label={field.label} className="fbl_repeater-inputs">
			<div className="fbl_repeater-inputs__inner">
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

				{(!field.limit || field.limit > attributes[fieldName].length) && (
					<Button
						icon={plus}
						onClick={addNew}
						style={{ width: "100%", justifyContent: "center", height: 48 }}
						variant="secondary"
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
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Card
			key={
				attribute.fastBlockId
					? `${fieldName}_${attribute.fastBlockId}`
					: `${fieldName}_${index}`
			}
		>
			<div className="fbl_repeater-card__header" draggable>
				<strong
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{field.single
						? `${field.single} ${index + 1}`
						: `Repeater ${__("Item")} ${index + 1}`}
				</strong>

				<div style={{ display: "flex", marginLeft: "auto" }}>
					{isOpen && (
						<div style={{ display: "flex", flexDirection: "column" }}>
							<Button
								onClick={() => {
									moveUp(index);
								}}
								disabled={isFirst(index)}
								icon={chevronUp}
								style={{ height: 18 }}
							/>
							<Button
								onClick={() => {
									moveDown(index);
								}}
								disabled={isLast(index)}
								icon={chevronDown}
								style={{ height: 18 }}
							/>
						</div>
					)}
					<Button
						onClick={() => {
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
