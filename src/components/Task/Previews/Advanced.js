import React from 'react';
import { Link } from 'react-router-dom';

import Helper from 'services/helper';

import Badge from 'components/UI/Badge';

import TaskPriorityIcon from '../Priority';

const TaskPreviewsAdvanced = (props) => {
	const { task, showBody, showFooter } = props;

	const body = showBody ? (
		<div className="card-body">
			<p className="card-text text-muted">
				{task.status ? task.status.title : ''} (
				{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'})
			</p>
		</div>
	) : null;

	const footer = showFooter ? (
		<div className="card-footer text-muted">
			<small>Updated: {Helper.formatDateTime(task.updated)} </small>
		</div>
	) : null;

	return (
		<Link
			to={`/tasks/${task.id}`}
			className="TaskPreviewsAdvanced CardLink card"
			style={{ borderLeft: `6px solid ${task.label}` }}
		>
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<span>{task.title}</span>
					</div>
					<div className="col-auto d-flex align-items-center">
						<TaskPriorityIcon task={task} />
						{task.completed ? (
							<Badge title="Completed" assignedClasses={['badge-primary', 'ml-2']} />
						) : null}
					</div>
				</div>
			</div>
			{body}
			{footer}
		</Link>
	);
};

TaskPreviewsAdvanced.defaultProps = {
	showBody: true,
	showFooter: true
};

export default TaskPreviewsAdvanced;
