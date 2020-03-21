import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';

import { Badge } from 'aionic-library';

import Helper from '../../../services/helper';

import TaskPriorityIcon from '../Priority';
import TaskPreviewDropdown from '../PreviewDropdown';

const TaskPreviewsAdvanced = (props) => {
	const { task } = props;

	return (
		<div
			className="TaskPreviewsAdvanced card"
			style={{ borderLeft: `5px solid ${task.status.color}` }}
		>
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						{task.project && task.project.key ? (
							<span className="badge badge-secondary mr-2" title="Project">
								{task.project.key}
							</span>
						) : null}

						<Link to={`/tasks/${task.id}`}>{task.title}</Link>
					</div>
					<div className="col-auto d-flex align-items-center">
						<TaskPriorityIcon task={task} />
						{task.completed ? (
							<div className="ml-2">
								<Badge label="Completed" type="success" />
							</div>
						) : null}
						<TaskPreviewDropdown task={task} />
					</div>
				</div>
			</div>
			<div className="card-body">
				<p className="card-text text-muted">
					{task.status ? task.status.title : ''} (
					{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : 'Unassigned'})
				</p>
			</div>
			<div className="card-footer text-muted">
				<small>
					Updated:
					{moment(moment()).diff(task.updated, 'minutes') <= 30
						? ` ${moment(moment()).diff(task.updated, 'minutes')} minutes ago`
						: ` ${Helper.formatDateTime(task.updated)}`}
				</small>
			</div>
		</div>
	);
};

export default TaskPreviewsAdvanced;
