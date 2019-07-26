import React from 'react';

const TaskBadgeCompleted = (props) => {
	const { task, assignedClasses } = props;

	return task.completed ? (
		<span
			className={`TaskBadge TaskBadgeCompleted badge badge-primary ${assignedClasses.join(' ')}`}
		>
			Completed
		</span>
	) : null;
};

TaskBadgeCompleted.defaultProps = {
	assignedClasses: []
};

export default TaskBadgeCompleted;
