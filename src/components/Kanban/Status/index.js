import React from 'react';

import TaskPreviewsBasic from '../../Task/Previews/Basic';

import './Status.scss';

const KanbanStatus = (props) => {
	const { tasks, title, maxWidth, showBody, showFooter } = props;

	return (
		<div className="KanbanStatus" style={{ flex: `0 0 ${maxWidth}%` }}>
			<div className="step-content">
				<h6 className="text-center text-uppercase">
					{title} <span className="badge badge-pill badge-secondary ml-2">{tasks.length}</span>
				</h6>
				<div className="mt-3">
					{tasks.map((task) => {
						return (
							<div className="task-wrapper shadow-sm" key={task.id}>
								<TaskPreviewsBasic task={task} showBody={showBody} showFooter={showFooter} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default KanbanStatus;
