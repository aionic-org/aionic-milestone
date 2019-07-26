import React from 'react';
import { Link } from 'react-router-dom';

import ProjectLabel from './Label';

const ProjectPreview = (props) => {
	const { project } = props;

	return (
		<Link to={`/project/${project.id}`} className="ProjectPreview CardLink card">
			<div className="card-header font-weight-bold">
				{project.title} ({project.tasks.length}) <ProjectLabel project={project} />
			</div>
			<div className="card-body">
				<h6 className="card-subtitle mb-2 text-muted">
					{project.author.firstname} {project.author.lastname}
				</h6>
				<p className="card-text">{project.description}</p>
			</div>
			<div className="card-footer text-muted">
				<small>Created: {project.created}</small>
			</div>
		</Link>
	);
};

export default ProjectPreview;
