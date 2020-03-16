import React from 'react';
import { Link } from 'react-router-dom';

import { Badge } from 'aionic-library';

import Helper from '../../services/helper';

import ProjectPreviewDropdown from './PreviewDropdown';

const ProjectPreview = (props) => {
	const { project } = props;

	return (
		<div className="ProjectPreview card">
			<div className="card-body">
				<h5 className="card-title">
					<div className="row">
						<div className="col">
							<Link to={`/projects/${project.id}`}>
								{project.title} ({project.tasks.length})
							</Link>
						</div>
						<div className="col-auto d-flex align-items-center">
							{project.completed ? <Badge label="Completed" type="success" /> : null}
							<ProjectPreviewDropdown project={project} />
						</div>
					</div>
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					{project.author.firstname} {project.author.lastname}
				</h6>
				<p className="card-text">{project.description}</p>
				<p className="card-text">
					<small className="text-muted">Created: {Helper.formatDate(project.created)}</small>
				</p>
			</div>
		</div>
	);
};

export default ProjectPreview;
