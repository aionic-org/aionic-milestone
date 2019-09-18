import React, { Component } from 'react';

import { Api, Spinner } from 'aionic-library';

import Helper from 'services/helper';

class TaskScratchpad extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			status: null,
			scratchpad: {
				author: this.props.user,
				task: this.props.task
			}
		};
	}

	componentDidMount = async () => {
		try {
			const scratchpad = await Api.fetchData(
				`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`
			);

			if (scratchpad) {
				this.setState({ isLoading: false, scratchpad });
			} else {
				this.setState({ isLoading: false, msg: 'Resource not found!' });
			}
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err),
				status: 'is-invalid'
			});
		}
	};

	handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(this.state.scratchpad, e, (scratchpad) => {
			this.setState({ scratchpad }, () => {
				Api.postData(`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`, {
					scratchpad
				})
					.then((_scratchpad) => {
						this.setState({
							scratchpad: _scratchpad,
							status: 'is-valid'
						});
						setTimeout(() => {
							this.setState({
								status: null
							});
						}, 2000);
					})
					.catch((err) => {
						this.setState({
							msg: Api.handleHttpError(err),
							status: 'is-invalid'
						});
					});
			});
		});
	};

	render() {
		const { isLoading, msg, scratchpad, status } = this.state;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		return (
			<div className="UserStatus">
				<label> Your personal scratchpad for this task</label>
				<textarea
					className={`form-control ${status}`}
					name="text"
					rows="3"
					defaultValue={scratchpad.text}
					onBlur={this.handleInputChange}
				/>
				<div className="valid-feedback">Scratchpad updated!</div>
				<div className="invalid-feedback">{msg}</div>
			</div>
		);
	}
}

export default TaskScratchpad;
