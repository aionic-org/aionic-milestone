import React from 'react';

import Helper from 'services/helper';

import Progress from 'components/UI/Progress';
import Widget from 'components/UI/Widget';

const ProjectWidgetbar = (props) => {
	const { project } = props;
	const { tasks } = project;

	const openTasks = tasks.filter((task) => !task.completed);
	const finishedTasks = tasks.filter((task) => task.completed);

	return (
		<div className="ProjectWidgetbar">
			<div className="row">
				<div className="col-12 col-xl-3 mt-3 mt-xl-0">
					<Widget
						title={openTasks.length}
						subtitle="Open tasks"
						icon="fas fa-list"
						iconColor="#d63031"
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						title={tasks.length}
						subtitle="Total tasks"
						icon="fas fa-table"
						iconColor="#e17055"
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						title={finishedTasks.length}
						subtitle="Completed tasks"
						icon="fas fa-check"
						iconColor="#00b894"
						subcontent={
							<div className="col">
								<Progress
									progress={Math.round((finishedTasks.length / tasks.length) * 100)}
									showPercent={true}
								/>
							</div>
						}
					/>
				</div>
				<div className="col-12 col-xl-3 mt-2 mt-xl-0">
					<Widget
						title={Helper.formatDate(project.updated)}
						subtitle="Last update"
						icon="fas fa-history"
						iconColor="#0984e3"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectWidgetbar;
