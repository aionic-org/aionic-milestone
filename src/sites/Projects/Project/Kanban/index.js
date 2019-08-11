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
						<Link to={`/project/${project.id}`} className="btn btn-link mr-2">
							Project
						</Link>
						<button type="button" className="btn btn-primary">
							<i className="fas fa-share mr-2" />
							Share
						</button>
					</div>
				</div>
				<KanbanContainer taskList={project.tasks} />
			</Content>
		</div>
	);
};

export default SitesProjectKanban;
