import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import { Api, Error, InputDate } from 'aionic-library';

import Helper from '../../../services/helper';
import Session from '../../../services/session';

import TaskSuggestion from '../../Task/Suggestion';

const ProjectForm = (props) => {
	const { history } = props;

	const [msg, setMsg] = useState('');
	const [project, setProject] = useState({
		author: Session.getUser(),
		deadline: moment(new Date()).add(7, 'days')
	});

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(project, e, (project) => {
			setProject(project);
		});
	};

	const handleDeadlineChange = (deadline) => {
		setProject({ ...project, deadline });
	};

	const handleTasksChange = (tasks) => {
		setProject({ ...project, tasks });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const newProject = await Api.postData(`projects`, { project });
			history.push(`/projects/${newProject.id}`);
		} catch (err) {
			setMsg(Api.handleHttpError(err));
		}
	};

	if (msg) {
		return <Error message={msg} />;
	}

	return (
		<div className="ProjectForm">
			<form onSubmit={handleSubmit} method="POST">
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						className="form-control"
						name="title"
						placeholder="Enter title"
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label>Key</label>
					<input
						type="text"
						className="form-control"
						name="key"
						placeholder="Enter key"
						onChange={handleInputChange}
					/>
					<small className="form-text text-muted">Unique key used to identify project</small>
				</div>
				<div className="form-group">
					<label>Deadline</label>
					<InputDate
						name="deadline"
						startDate={project.deadline}
						updateParent={handleDeadlineChange}
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						className="form-control"
						name="description"
						onChange={handleInputChange}
						rows="3"
					/>
				</div>
				<div className="form-group">
					<label>Tasks</label>
					<TaskSuggestion updateParent={handleTasksChange} />
				</div>
				<button type="submit" className="button button-primary float-right">
					Save
				</button>
			</form>
		</div>
	);
};

export default withRouter(ProjectForm);
