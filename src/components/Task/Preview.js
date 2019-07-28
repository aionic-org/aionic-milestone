import React from 'react';
import { Link } from 'react-router-dom';

import Helper from 'services/helper';

import Badge from 'components/UI/Badge';

import TaskPriorityIcon from './Priority';

const TaskPreview = (props) => {
	const { task } = props;

	const type = task.type ? (
		<span className="small mr-2 text-secondary" title="Type">{`${task.type.title} `}</span>
	) : null;

	return (
		<Link to={`/task/${task.id}`} className="TaskPreview CardLink card">
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						<span>{task.title}</span>
					</div>
					<div className="col-auto d-flex align-items-center">
						{type}
						<TaskPriorityIcon task={task} />
						{task.completed ? (
							<Badge title="Completed" assignedClasses={['badge-primary', 'ml-2']} />
						) : null}
					</div>
				</div>
			</div>
			<div className="card-body">
				<p className="card-text text-muted">
					{task.status ? task.status.title : ''} (
					{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'})
				</p>
			</div>
			<div className="card-footer text-muted">
				<small>Updated: {Helper.formatDateTime(task.updated)} </small>
			</div>
		</Link>
	);
};

TaskPreview.defaultProps = {
	highlightAssignee: false
};

export default TaskPreview;
