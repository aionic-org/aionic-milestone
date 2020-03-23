import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const PreviewDragable = (props) => {
	const { item, itemType, moveItem, index } = props;

	const ref = useRef(null);
	const [, drop] = useDrop({
		accept: itemType,
		hover(item, monitor) {
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
			const hoverBoundingRect = ref.current.getBoundingClientRect();

			// Get horizontal middle
			const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the right
			const hoverClientX = clientOffset.x - hoverBoundingRect.left;

			// Dragging leftwards
			if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
				return;
			}

			// Dragging rightwards
			if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
				return;
			}

			moveItem(dragIndex, hoverIndex);
			item.index = hoverIndex;
		}
	});

	const [{ isDragging }, drag] = useDrag({
		item: { type: itemType, id: item.id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	});

	const opacity = isDragging ? 0 : 1;
	const style = { opacity, cursor: 'move' };

	drag(drop(ref));

	return props.children(ref, style);
};

export default PreviewDragable;
