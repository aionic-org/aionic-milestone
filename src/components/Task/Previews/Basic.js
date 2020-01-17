import React from 'react';
import { Link } from 'react-router-dom';

import TaskPriorityIcon from '../Priority';

const TaskPreview = (props) => {
	const { task } = props;

	return (
		<Link
			to={`/tasks/${task.id}`}
			className="TaskPreview card-link card"
			style={{ borderLeft: `6px solid ${task.label}` }}
		>
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<span>{task.title}</span>
					</div>
				</div>
			</div>
			<div className="card-body">
				<p className="card-text text-muted">
					{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'}
				</p>
			</div>
			<div className="card-footer text-muted">
				<div className="d-flex align-items-center">
					<TaskPriorityIcon task={task} />
				</div>
			</div>
		</Link>
	);
};

export default TaskPreview;
