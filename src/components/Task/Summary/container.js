import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-library';

import TaskSummary from '.';

class TaskSummaryContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {}
		};
	}

	componentDidMount = () => {
		const requests = [
			Api.fetchData('task-priorities'),
			Api.fetchData('task-status'),
			Api.fetchData('users')
		];

		Promise.all(requests)
			.then((res) => {
				this.setState({
					isLoading: false,
					lists: {
						priorityList: res[0],
						statusList: res[1],
						userList: res[2]
					}
				});
			})
			.catch((err) => {
				this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
			});
	};

	render() {
		const { isLoading, msg, lists } = this.state;
		const { task, updateParentTaskState } = this.props;

		if (isLoading) {
			return <Spinner />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="TaskSummaryContainer">
				<TaskSummary lists={lists} task={task} updateParentTaskState={updateParentTaskState} />
			</div>
		);
	}
}

export default TaskSummaryContainer;
