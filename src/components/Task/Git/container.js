import React, { Component } from 'react';

import { Api, Helper, Spinner, Error } from 'aionic-library';

import TaskGit from '.';

class TaskGitContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {
				orgList: [],
				repoList: []
			}
		};
	}

	componentDidMount = async () => {
		try {
			const { task } = this.props;
			const { organization } = task;

			const orgList = await Api.fetchData('git/organization');

			if (organization) {
				const repoList = await Api.fetchData(`git/${organization.id}/repository`);

				this.setState({
					isLoading: false,
					lists: {
						orgList,
						repoList
					}
				});
			} else {
				this.setState({
					isLoading: false,
					lists: {
						orgList
					}
				});
			}
		} catch (err) {
			this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
		}
	};

	handleOrgChange = async (e) => {
		try {
			const orgId = e.target.value;

			if (orgId) {
				const repoList = await Api.fetchData(`git/${orgId}/repository`);

				this.setState((prevState) => ({
					isLoading: false,
					lists: {
						...prevState.lists,
						repoList
					}
				}));

				this.props.updateParentTaskState({
					...this.props.task,
					organization: { id: orgId },
					repository: null,
					branch: null
				});
			} else {
				this.setState((prevState) => ({
					lists: {
						...prevState.lists,
						repoList: []
					}
				}));

				this.props.updateParentTaskState({
					...this.props.task,
					organization: null,
					repository: null,
					branch: null
				});
			}
		} catch (err) {
			this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
		}
	};

	handleRepoChange = (e) => {
		const repoId = e.target.value || null;

		this.props.updateParentTaskState({
			...this.props.task,
			repository: { id: repoId },
			branch: null
		});
	};

	handleBranchChange = (e) => {
		Helper.updateObjectPropByEvent(this.props.task, e, (task) => {
			this.props.updateParentTaskState(task);
		});
	};

	render() {
		const { task } = this.props;
		const { isLoading, msg, lists } = this.state;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="TaskGitContainer">
				<TaskGit
					task={task}
					handleOrgChange={this.handleOrgChange}
					handleRepoChange={this.handleRepoChange}
					handleBranchChange={this.handleBranchChange}
					lists={lists}
				/>
			</div>
		);
	}
}

export default TaskGitContainer;
