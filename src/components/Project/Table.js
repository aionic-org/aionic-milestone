import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../services/helper';

const ProjectTable = ({ projects, title }) => (
	<div className="ProjectTable">
		{title.length ? <p className="d-inline-block text-muted font-weight-bold">{title}</p> : null}
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Author</th>
						<th scope="col">Deadline</th>
						<th scope="col">Completed</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project) => (
						<tr key={project.id}>
							<td>
								<Link to={`/projects/${project.id}`}>{project.title}</Link>
							</td>
							<td>
								{project.author ? `${project.author.firstname} ${project.author.lastname}` : '-'}
							</td>
							<td>{Helper.formatDate(project.deadline)}</td>
							<td>{String(project.completed)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);

ProjectTable.defaultProps = {
	projects: [],
	title: ''
};

export default ProjectTable;
