import React from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from 'services/constants';

import TaskPreviewDragable from '../../Task/Previews/Dragable';

import './Status.scss';

const KanbanStatus = (props) => {
	const { status, tasks, maxWidth, handleTaskDrop, stretch } = props;
	const { id, title, max, color } = status;

	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.TASK,
		drop: (task) => {
			handleTaskDrop(task.id, id);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver()
		})
	});

	return (
		<div
			className={`KanbanStatus ${stretch ? 'stretch' : ''}`}
			style={{ flex: `0 0 ${maxWidth}%` }}
			ref={drop}
		>
			<div className="step-content" style={{ background: isOver ? '#eee' : 'inherit' }}>
				<h6 className="text-center text-uppercase">
					{title}
					<span
						style={{ backgroundColor: `${color}` }}
						className="badge badge-pill ml-2 badge-secondary"
					>{`${tasks.length} ${max > 0 ? `/ ${max}` : ''}`}</span>
				</h6>
				{tasks.map((task) => {
					return (
						<div className="wrapper shadow-sm" key={task.id}>
							<TaskPreviewDragable task={task} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default KanbanStatus;
