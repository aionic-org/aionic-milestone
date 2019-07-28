import React from 'react';

import './Status.scss';

import TaskPreview from 'components/Task/Preview';

const BoardStatus = (props) => {
	const { tasks, status, maxWidth } = props;

	return (
		<div className="BoardStatus p-2" style={{ flex: `0 0 ${maxWidth}%` }}>
			<h6 className="text-center">
				{status.title} <span className="badge badge-pill badge-secondary ml-2">{tasks.length}</span>
			</h6>
			<div className="mt-3">
				{tasks.map((task) => {
					return <TaskPreview key={task.id} task={task} />;
				})}
			</div>
		</div>
	);
};

export default BoardStatus;
