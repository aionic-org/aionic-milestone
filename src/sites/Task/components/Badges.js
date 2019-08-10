import React from 'react';
import moment from 'moment';

import Badge from 'components/UI/Badge';

const TaskBadges = (props) => {
	const { task } = props;

	const taskIsExpired = moment(task.deadline).diff(moment(), 'minutes') <= 0;

	return (
		<div className="TaskBadges Badges">
			<div className="list-inline">
				{task.completed ? (
					<div className="list-inline-item">
						<Badge title="Completed" assignedClasses={['badge-primary']} />
					</div>
				) : null}
				{!task.completed && !taskIsExpired && moment(task.deadline).diff(moment(), 'hours') < 12 ? ( // Task will expire in < 12h
					<div className="list-inline-item">
						<Badge
							title="Expiring"
							assignedClasses={['badge-warning']}
							info="Task expires in the next 12 hours"
						/>
					</div>
				) : null}
				{!task.completed && taskIsExpired ? ( // Task is expired
					<div className="list-inline-item">
						<Badge title="Expired" assignedClasses={['badge-danger']} />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TaskBadges;
