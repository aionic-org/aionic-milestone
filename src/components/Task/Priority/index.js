import React from 'react';

import './Priority.scss';

const TaskPriority = (props) => {
	const { task } = props;
	const { priority } = task;

	let icon = null;
	let title = '';

	if (!priority) {
		return null;
	}

	if (priority.value === 1) {
		icon = <i className="fas fa-angle-double-down" />;
		title = 'Low priority';
	} else if (priority.value === 2) {
		icon = <i className="fas fa-minus" />;
		title = 'Medium priority';
	} else if (priority.value === 3) {
		icon = <i className="fas fa-angle-double-up" />;
		title = 'High priority';
	}

	return (
		<span
			className="TaskPriority float-right"
			data-toggle="tooltip"
			data-placement="top"
			title={title}
		>
			{icon}
		</span>
	);
};

export default TaskPriority;
