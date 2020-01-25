import React from 'react';

const TaskActionsComplete = (props) => {
	const { task, updateParentTaskState } = props;

	const toggleComplete = () => {
		updateParentTaskState({ ...task, completed: !task.completed });
	};

	return (
		<div className="TaskActionsComplete">
			{task.completed ? (
				<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
					<i className="fas fa-redo fa-fw mr-1" /> Reopen
				</button>
			) : (
				<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
					<i className="fas fa-check fa-fw mr-1" /> Complete
				</button>
			)}
		</div>
	);
};

export default TaskActionsComplete;
