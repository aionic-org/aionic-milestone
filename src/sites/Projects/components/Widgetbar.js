import React from 'react';

import { Progress, Widget } from 'aionic-library';

const ProjectsWidgetbar = (props) => {
	const { allProjects } = props;

	const openProjects = allProjects.filter((project) => !project.completed);
	const finishedProjects = allProjects.filter((project) => project.completed);

	return (
		<div className="ProjectsWidgetbar">
			<div className="row">
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						title={`Open Projects: ${openProjects.length}`}
						icon="fas fa-list"
						iconBackground="#6c5ce7"
					/>
				</div>
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						title={`Total Projects: ${allProjects.length}`}
						icon="fas fa-table"
						iconBackground="#636e72"
					/>
				</div>
				<div className="col-12 col-xl-4 mt-xl-0">
					<Widget
						icon="fas fa-check"
						iconBackground="#00b894"
						title={
							<div className="row d-flex align-items-center">
								<div className="col-auto">Finished Projects: {finishedProjects.length}</div>
								<div className="col">
									<Progress
										progress={
											allProjects.length
												? Math.round((finishedProjects.length / allProjects.length) * 100)
												: 0
										}
										showPercent={true}
									/>
								</div>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsWidgetbar;
