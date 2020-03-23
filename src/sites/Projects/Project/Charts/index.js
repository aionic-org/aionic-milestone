import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/UI/Title/';

import ProjectChartsCompletedTasks from 'components/Project/Charts/CompletedTasks';
import ProjectChartsStatusTasks from 'components/Project/Charts/StatusTasks';

const SitesProjectCharts = (props) => {
	const { project } = props;

	return (
		<div className="SitesProjectCharts">
			<div className="row">
				<div className="col-12 col-md-7 col-xl">
					<Title title={`Charts: ${project.title}`} placeholder="Enter project title" />
				</div>
				<div className="col-12 col-md-5 col-xl-auto">
					<Link to={`/projects/${project.id}`} className="button button-link mr-2">
						<i className="fas fa-caret-left" /> Project
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-4">
					<ProjectChartsCompletedTasks project={project} />
				</div>
				<div className="col-12 col-md-4">
					<ProjectChartsStatusTasks project={project} />
				</div>
			</div>
		</div>
	);
};

export default SitesProjectCharts;
