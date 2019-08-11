import React from 'react';
import { Link } from 'react-router-dom';

import Badge from 'components/UI/Badge';

const ProjectPreview = (props) => {
	const { project } = props;

	return (
		<Link to={`/project/${project.id}`} className="ProjectPreview CardLink card">
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						{project.title} ({project.tasks.length})
					</div>
					<div className="col-auto d-flex align-items-center">
						{project.completed ? (
							<Badge title="Completed" assignedClasses={['badge-primary', 'ml-2']} />
						) : null}
					</div>
				</div>
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
