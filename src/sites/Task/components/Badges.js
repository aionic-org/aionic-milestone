import React from 'react';
import moment from 'moment';

import { Badge } from 'aionic-library';

const TaskBadges = (props) => {
	const { task } = props;

	const taskIsExpired = task.deadline
		? moment(task.deadline).diff(moment(), 'minutes') <= 0
		: false;

	return (
		<div className="TaskBadges Badges">
			<div className="list-inline">
				{task.isClone ? (
					<div className="list-inline-item">
						<Badge label="Clone" assignedClasses={['badge-info']} />
					</div>
				) : null}

				{task.project ? (
					<div className="list-inline-item">
						<Badge
							label={task.project.title}
							type="secondary"
							info="Task is part of the following project"
						/>
					</div>
				) : null}

				{task.completed ? (
					<div className="list-inline-item">
						<Badge label="Completed" type="success" />
					</div>
				) : null}

				{task.deadline &&
				!task.completed &&
				!taskIsExpired &&
				moment(task.deadline).diff(moment(), 'hours') < 12 ? ( // Task will expire in < 12h
					<div className="list-inline-item">
						<Badge label="Expiring" type="warning" info="Task expires within the next 12 hours" />
					</div>
				) : null}

				{!task.completed && taskIsExpired ? ( // Task is expired
					<div className="list-inline-item">
						<Badge label="Expired" type="danger" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TaskBadges;
