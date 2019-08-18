import React from 'react';

import TaskSuggestion from './Suggestion';

const TaskLinks = (props) => {
	const { task, updateTask } = props;

	const handleChange = (taskList) => {
		const updatedTask = { ...task, links: taskList };
		updateTask(updatedTask);
	};

	return (
		<div className="TaskLinks">
			<label>Other tasks linked with this one:</label>
			<TaskSuggestion updateParent={handleChange} taskListSelected={task.links} maxHeight={true} />
		</div>
	);
};

export default TaskLinks;
