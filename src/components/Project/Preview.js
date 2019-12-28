import React from 'react';
import { Link } from 'react-router-dom';

import { Badge } from 'aionic-library';

import Helper from '../../services/helper';

const ProjectPreview = (props) => {
	const { project } = props;

	return (
		<Link to={`/projects/${project.id}`} className="ProjectPreview card-link card">
			<div className="card-header font-weight-bold">
				<div className="row">
					<div className="col">
						{project.title} ({project.tasks.length})
					</div>
					<div className="col-auto d-flex align-items-center">
						{project.completed ? <Badge label="Completed" type="success" /> : null}
					</div>
				</div>
			</div>
			<div className="card-body">
				<h6 className="card-subtitle text-muted mt-0">
					{project.author.firstname} {project.author.lastname}
				</h6>
				<p className={`card-text ${project.description ? 'mt-1' : ''}`}>{project.description}</p>
			</div>
			<div className="card-footer text-muted">
				<small>Created: {Helper.formatDate(project.created)}</small>
			</div>
		</Link>
	);
};

export default ProjectPreview;
