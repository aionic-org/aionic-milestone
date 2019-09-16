import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import Helper from 'services/helper';
import Api from 'services/api';
import Session from 'services/session';

import Error from 'components/UI/Error';
import InputDate from 'components/UI/Input/Date/';

import TaskSuggestion from 'components/Task/Suggestion';

class ProjectForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: '',
			project: {
				author: Session.getUser()
			}
		};
	}

	handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(this.state.project, e, (project) => {
			this.setState({ project });
		});
	};

	updateDeadline = (deadline) => {
		this.setState((prevState) => {
			return { project: { ...prevState.project, deadline } };
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.createProject();
	};

	updateProjectTasks = (tasks) => {
		this.setState((prevState) => {
			return { project: { ...prevState.project, tasks } };
		});
	};

	createProject = () => {
		const { project } = this.state;

		Api.postData(`projects`, { project })
			.then((res) => {
				this.props.history.push(`/projects/${res.id}`);
			})
			.catch((err) => {
				this.setState({ msg: Api.handleHttpError(err) });
			});
	};

	render() {
		const { msg } = this.state;

		if (msg.length) {
			return (
				<div className="ProjectForm">
					<Error message={msg} />
				</div>
			);
		}

		return (
			<div className="ProjectForm">
				<form onSubmit={this.handleSubmit} method="POST">
					<div className="form-group">
						<label>Title</label>
						<input
							type="text"
							className="form-control"
							name="title"
							placeholder="Enter title"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Key</label>
						<input
							type="text"
							className="form-control"
							name="key"
							placeholder="Enter key"
							onChange={this.handleInputChange}
						/>
						<small className="form-text text-muted">Unique key used to identify project</small>
					</div>
					<div className="form-group">
						<label>Deadline</label>
						<InputDate
							name="deadline"
							startDate={moment(new Date()).add(7, 'days')}
							updateParent={this.updateDeadline}
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							className="form-control"
							name="description"
							onChange={this.handleInputChange}
							rows="3"
						/>
					</div>
					<div className="form-group">
						<label>Tasks</label>
						<TaskSuggestion updateParent={this.updateProjectTasks} />
					</div>
					<button type="submit" className="btn btn-primary float-right">
						Create
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(ProjectForm);
