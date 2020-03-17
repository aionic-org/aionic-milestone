import React from 'react';

import TaskPreviewsBasic from '../../Task/Previews/Basic';

import './Status.scss';

const KanbanStatus = (props) => {
	const { tasks, max, title, maxWidth, color } = props;

	return (
		<div className="KanbanStatus" style={{ flex: `0 0 ${maxWidth}%` }}>
			<div className="step-content">
				<h6 className="text-center text-uppercase">
					{title}
					<span
						style={{ backgroundColor: `${color}` }}
						className="badge badge-pill ml-2 badge-secondary"
					>{`${tasks.length} ${max > 0 ? `/ ${max}` : ''}`}</span>
				</h6>
				<div className="mt-3">
					{tasks.map((task) => {
						return (
							<div className="task-wrapper shadow-sm" key={task.id}>
								<TaskPreviewsBasic task={task} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default KanbanStatus;
