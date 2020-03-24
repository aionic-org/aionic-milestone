import React, { Component } from 'react';

import { Api, Session, Error, Toast } from 'aionic-library';

import TaskLoader from './components/Loader';

import SitesTask from '.';
import TaskForm from 'components/Task/Form';

class SitesTaskContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isNewTask: false,
			msg: null,
			task: {},
			taskUpdate: {
				success: null,
				msg: null
			}
		};
	}

	componentDidMount = async () => {
		const taskId = this.props.match.params.id;

		// New task
		if (taskId === undefined) {
			this.setState({
				isLoading: false,
				isNewTask: true
			});
		} else {
			// Fetch existing task

			try {
				const task = await Api.fetchData(`tasks/${taskId}`);

				if (task) {
					this.setState({ isLoading: false, task });
				} else {
					this.setState({ isLoading: false, msg: 'Resource not found!' });
				}
			} catch (err) {
				this.setState({
					isLoading: false,
					msg: Api.handleHttpError(err)
				});
			}
		}
	};

	updateTask = (task) => {
		Api.putData(`tasks/${task.id}`, { task })
			.then((updatedTask) => {
				this.setState({
					task: updatedTask,
					taskUpdate: {
						success: true,
						msg: 'Task successfully updated!'
					}
				});

				setTimeout(() => {
					this.setState({
						taskUpdate: {
							success: null,
							msg: null
						}
					});
				}, 2000);
			})
			.catch(() => {
				this.setState({
					taskUpdate: {
						success: false,
						msg: 'Failed to update task!'
					}
				});
			});
	};

	render() {
		const { isLoading, isNewTask, msg, task, taskUpdate } = this.state;

		const alert = taskUpdate.msg ? (
			<Toast msg={taskUpdate.msg} success={taskUpdate.success} />
		) : null;

		if (isLoading) {
			return <TaskLoader />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		if (isNewTask) {
			return <TaskForm initialTask={{ author: Session.getUser() }} />;
		}

		return (
			<div className="SitesTaskContainer">
				{alert}
				<SitesTask task={task} updateParentTaskState={this.updateTask} />
			</div>
		);
	}
}

export default SitesTaskContainer;
