import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Api, Session, Error } from 'aionic-library';

import Helper from 'services/helper';

import UserSuggestion from 'components/User/Suggestion';

class BoardsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: '',
			board: {
				author: Session.getUser()
			}
		};
	}

	handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(this.state.board, e, (board) => {
			this.setState({ board });
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.createBoard();
	};

	updateBoardUsers = (users) => {
		this.setState((prevState) => ({ board: { ...prevState.board, users } }));
	};

	createBoard = () => {
		const { board } = this.state;

		Api.postData(`boards`, { board })
			.then((res) => {
				this.props.history.push(`/boards/${res.id}`);
			})
			.catch((err) => {
				this.setState({ msg: Api.handleHttpError(err) });
			});
	};

	render() {
		const { msg } = this.state;

		if (msg.length) {
			return (
				<div className="BoardsForm">
					<Error message={msg} />
				</div>
			);
		}

		return (
			<div className="BoardsForm">
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
						<label>Description</label>
						<textarea
							className="form-control"
							name="description"
							onChange={this.handleInputChange}
							rows="3"
						/>
					</div>

					<div className="form-group">
						<label>Users</label>
						<UserSuggestion updateParent={this.updateBoardUsers} multiSelect={false} />
					</div>

					<button type="submit" className="btn btn-primary float-right">
						Create
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(BoardsForm);
