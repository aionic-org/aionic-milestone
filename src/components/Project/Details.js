import React from 'react';

import Helper from 'services/helper';

import InputDate from 'components/UI/Input/Date/';

import ProjectDescription from './Description';

const ProjectDetails = (props) => {
	const { project, updateParentProjectState } = props;

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(project, e, updateParentProjectState);
	};

	const updateDeadline = (deadline) => {
		updateParentProjectState({ ...project, deadline });
	};

	return (
		<div className="ProjectDetails">
			<div className="form-group">
				<label>Key</label>
				<input
					type="text"
					name="key"
					className="form-control"
					value={project.key}
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label>Author</label>
				<input
					type="text"
					name="author"
					className="form-control"
					value={project.author ? `${project.author.firstname} ${project.author.lastname}` : '-'}
					disabled
				/>
			</div>
			<div className="form-group">
				<label>Created</label>
				<input
					type="text"
					name="created"
					className="form-control"
					value={Helper.formatDateTime(project.created)}
					disabled
				/>
			</div>
			<div className="form-group">
				<label>Updated</label>
				<input
					type="text"
					name="updated"
					className="form-control"
					value={Helper.formatDateTime(project.updated)}
					disabled
				/>
			</div>
			<div className="form-group">
				<label>Deadline</label>
				<InputDate name="deadline" startDate={project.deadline} updateParent={updateDeadline} />
			</div>
			<ProjectDescription project={project} updateParentProjectState={updateParentProjectState} />
		</div>
	);
};

export default ProjectDetails;
