import React from 'react';

import Badge from 'components/UI/Badge';

const TaskBadges = (props) => {
	const { task } = props;

	return (
		<div className="TaskBadges Badges">
			<div className="list-inline">
				{task.completed ? (
					<div className="list-inline-item">
						<Badge title="Completed" large={true} assignedClasses={['badge-primary']} />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TaskBadges;
