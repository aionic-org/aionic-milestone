import React from 'react';

import Progress from 'components/UI/Progress';
import Widget from 'components/UI/Widget';

const ProjectsWidgetbar = (props) => {
	const { allProjects } = props;

	const openProjects = allProjects.filter((project) => !project.completed);
	const finishedProjects = allProjects.filter((project) => project.completed);

	return (
		<div className="ProjectsWidgetbar">
			<div className="row">
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						title={openProjects.length}
						subtitle="Open projects"
						icon="fas fa-list"
						iconColor="#6c5ce7"
					/>
				</div>
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						title={allProjects.length}
						subtitle="Total projects"
						icon="fas fa-table"
						iconColor="#e17055"
					/>
				</div>
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						title={finishedProjects.length}
						subtitle="Finished projects"
						icon="fas fa-check"
						iconColor="#00b894"
						subcontent={
							<div className="col">
								<Progress
									progress={Math.round((finishedProjects.length / allProjects.length) * 100)}
									showPercent={true}
								/>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsWidgetbar;
