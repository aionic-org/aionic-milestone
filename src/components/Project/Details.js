import React from 'react';

import { InputDate } from 'aionic-library';

import Helper from '../../services/helper';

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
					defaultValue={project.key || ''}
					onBlur={handleInputChange}
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
				<label>Updated</label>
				<input
					type="text"
					name="updated"
					className="form-control"
					value={Helper.formatDateTime(project.updated)}
					disabled
				/>
			</div>
			<div className="form-group row">
				<div className="col-12 col-md-6">
					<label>Created</label>
					<input
						type="text"
						name="created"
						className="form-control"
						value={Helper.formatDate(project.created)}
						disabled
					/>
				</div>
				<div className="col-12 col-md-6">
					<label>Deadline</label>
					<InputDate name="deadline" startDate={project.deadline} updateParent={updateDeadline} />
				</div>
			</div>
			<ProjectDescription project={project} updateParentProjectState={updateParentProjectState} />
		</div>
	);
};

export default ProjectDetails;
