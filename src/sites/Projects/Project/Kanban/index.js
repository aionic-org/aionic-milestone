import React from 'react';
import { Link } from 'react-router-dom';

import Content from 'components/UI/Content';
import Title from 'components/UI/Title/';

import KanbanContainer from 'components/Kanban/container';

const SitesProjectKanban = (props) => {
	const { project } = props;

	return (
		<div className="SitesProjectKanban">
			<Content>
				<div className="row">
					<div className="col-12 col-md-7 col-xl">
						<Title title={`Kanban - ${project.title}`} placeholder="Enter project title" />
					</div>
					<div className="col-12 col-md-5 col-xl-auto">
						<Link to={`/projects/${project.id}`} className="button button-link mr-2">
							Project View
						</Link>
					</div>
				</div>
				<KanbanContainer taskList={project.tasks} />
			</Content>
		</div>
	);
};

export default SitesProjectKanban;
