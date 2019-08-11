import React from 'react';

import './Status.scss';

import TaskPreviewsBasic from 'components/Task/Previews/Basic';

const KanbanStep = (props) => {
	const { tasks, title, maxWidth, showBody, showFooter } = props;

	return (
		<div className="KanbanStep" style={{ flex: `0 0 ${maxWidth}%` }}>
			<div className="step-wrapper">
				<h6 className="text-center text-uppercase">
					{title} <span className="badge badge-pill badge-secondary ml-2">{tasks.length}</span>
				</h6>
				<div className="mt-3">
					{tasks.map((task) => {
						return (
							<div className="task-wrapper shadow-sm">
								<TaskPreviewsBasic
									key={task.id}
									task={task}
									showBody={showBody}
									showFooter={showFooter}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default KanbanStep;
