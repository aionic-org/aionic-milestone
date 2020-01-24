import React from 'react';
import { Link } from 'react-router-dom';

import { Badge } from 'aionic-library';

import Helper from '../../../services/helper';

import TaskPriorityIcon from '../Priority';
import TaskPreviewActionMenu from '../PreviewActionMenu';

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
		<div
			to={`/tasks/${task.id}`}
			className="TaskPreviewsAdvanced card"
			style={{ borderLeft: `6px solid ${task.label}` }}
		>
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<Link to={`/tasks/${task.id}`}>
							{task.project && task.project.key ? `${task.project.key} - ` : ''}
							{task.title}
						</Link>
					</div>
					<div className="col-auto d-flex align-items-center">
						<TaskPriorityIcon task={task} />
						{task.completed ? (
							<div className="ml-2">
								<Badge label="Completed" type="success" />{' '}
							</div>
						) : null}
						<TaskPreviewActionMenu task={task} />
					</div>
				</div>
			</div>
			{body}
			{footer}
		</div>
	);
};

TaskPreviewsAdvanced.defaultProps = {
	showBody: true,
	showFooter: true
};

export default TaskPreviewsAdvanced;
