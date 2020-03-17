import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';

import TaskPriorityIcon from '../Priority';
import TaskPreviewDropdown from '../PreviewDropdown';
import { ItemTypes } from 'services/constants';

const TaskPreviewDragable = (props) => {
	const { task } = props;

	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.TASK, id: task.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<div
			className="TaskPreviewDragable card"
			style={{
				borderLeft: `6px solid ${task.status.color}`,
				opacity: isDragging ? 0.5 : 1,
				cursor: 'move'
			}}
			ref={drag}
		>
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<Link to={`/tasks/${task.id}`}>{task.title}</Link>
					</div>
				</div>
			</div>
			<div className="card-body">
				<p className="card-text text-muted">
					{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : 'Unassigned'}
				</p>
			</div>
			<div className="card-footer text-muted">
				<div className="row">
					<div className="col d-flex align-items-center">
						<TaskPriorityIcon task={task} />
						{task.project && task.project.key ? (
							<span className="ml-2" title="Project">
								{task.project.key}
							</span>
						) : null}
					</div>
					<div className="col-auto d-flex align-items-center">
						<TaskPreviewDropdown task={task} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskPreviewDragable;
