import React from 'react';

import './Title.scss';

const TaskTitle = (props) => {
	const { task, onBlur } = props;

	const label = task.status ? (
		<div
			className="label"
			style={{
				background: task.status.color
			}}
		/>
	) : null;

	return (
		<div className="TaskTitle">
			{label}
			<input
				type="text"
				name="title"
				className={`h3 mb-0 ${task.completed ? 'completed' : ''}`}
				placeholder="Enter task title"
				autoComplete="off"
				defaultValue={task.title}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default TaskTitle;
