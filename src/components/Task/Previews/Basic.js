import React from 'react';
import { Link } from 'react-router-dom';

import TaskPriorityIcon from '../Priority';

const TaskPreview = (props) => {
	const { task, showBody } = props;

	const type = task.type ? (
		<span className="small mr-3 text-secondary" title="Type">{`${task.type.title} `}</span>
	) : null;

	const body = showBody ? (
		<div className="card-body">
			<p className="card-text text-muted">
				{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'}
			</p>
		</div>
	) : null;

	return (
		<Link to={`/tasks/${task.id}`} className="TaskPreview CardLink card">
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<span>{task.title}</span>
					</div>
				</div>
			</div>
			{body}
			<div className="card-footer text-muted">
				<div className="d-flex align-items-center">
					{type}
					<TaskPriorityIcon task={task} />
				</div>
			</div>
		</Link>
	);
};

TaskPreview.defaultProps = {
	showBody: true
};

export default TaskPreview;
