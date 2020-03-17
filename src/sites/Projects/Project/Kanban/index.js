import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/UI/Title/';

import Kanban from 'components/Kanban/';

const SitesProjectKanban = (props) => {
	const { project } = props;

	return (
		<div className="SitesProjectKanban">
			<div className="row">
				<div className="col-12 col-md-7 col-xl">
					<Title title={`Kanban: ${project.title}`} placeholder="Enter project title" />
				</div>
				<div className="col-12 col-md-5 col-xl-auto">
					<Link to={`/projects/${project.id}`} className="button button-link mr-2">
						<i className="fas fa-caret-left" /> Project
					</Link>
				</div>
			</div>
			<Kanban taskList={project.tasks} />
		</div>
	);
};

export default SitesProjectKanban;
