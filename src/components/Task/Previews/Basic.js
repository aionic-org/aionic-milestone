import React from 'react';
import { Link } from 'react-router-dom';

import TaskPriorityIcon from '../Priority';
import TaskPreviewActionMenu from '../PreviewActionMenu';

const TaskPreview = (props) => {
	const { task } = props;

	return (
		<div className="TaskPreviewsBasic card" style={{ borderLeft: `6px solid ${task.label}` }}>
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
					</div>
					<div className="col-auto d-flex align-items-center">
						<TaskPreviewActionMenu task={task} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskPreview;
