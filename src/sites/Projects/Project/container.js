import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Api from 'services/api';

import Error from 'components/UI/Error';
import Spinner from 'components/UI/Spinner';
import Toast from 'components/UI/Toast';

import SitesProject from '.';

class SitesProjectContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			project: {},
			projectUpdate: {
				success: null,
				msg: null
			}
		};
	}

	componentDidMount = async () => {
		try {
			const projectId = this.props.match.params.id;
			const project = await Api.fetchData(`projects/${projectId}`);

			if (project) {
				this.setState({ isLoading: false, project });
			} else {
				this.setState({ isLoading: false, msg: 'Resource not found!' });
			}
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	updateProject = (_project) => {
		const project = _project || this.state.project;

		Api.putData(`projects/${project.id}`, { project })
			.then((updatedProject) => {
				this.setState({
					project: updatedProject,
					projectUpdate: {
						success: true,
						msg: 'Project successfully updated!'
					}
				});
				setTimeout(() => {
					this.setState({
						projectUpdate: {
							success: null,
							msg: null
						}
					});
				}, 2000);
			})
			.catch(() => {
				this.setState({
					projectUpdate: {
						success: false,
						msg: 'Failed to update project!'
					}
				});
			});
	};

	deleteProject = () => {
		Api.deleteData(`projects/${this.state.project.id}`)
			.then(() => {
				this.props.history.push('/projects');
			})
			.catch(() => {
				this.setState({
					projectUpdate: {
						success: false,
						msg: 'Failed to delete project!'
					}
				});
			});
	};

	updateParentProjectState = (project) => {
		this.updateProject(project);
	};

	render() {
		const { isLoading, msg, project, projectUpdate } = this.state;

		const alert = projectUpdate.msg ? (
			<Toast msg={projectUpdate.msg} success={projectUpdate.success} />
		) : null;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="SitesProjectContainer">
				<SitesProject
					project={project}
					updateParentProjectState={this.updateParentProjectState}
					deleteProject={this.deleteProject}
				/>
				{alert}
			</div>
		);
	}
}

export default withRouter(SitesProjectContainer);
