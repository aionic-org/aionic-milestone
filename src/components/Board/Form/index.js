import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Api, Session, Error } from 'aionic-library';

import Helper from '../../../services/helper';

import UserSuggestion from '../../../components/User/Suggestion';

const BoardForm = (props) => {
	const { history } = props;

	const [msg, setMsg] = useState('');
	const [board, setBoard] = useState({
		author: Session.getUser()
	});

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(board, e, (board) => {
			setBoard(board);
		});
	};

	const handleMembers = (members) => {
		setBoard({ ...board, members });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const newBoard = await Api.postData(`boards`, { board });
			history.push(`/boards/${newBoard.id}`);
		} catch (err) {
			setMsg(Api.handleHttpError(err));
		}
	};

	if (msg) {
		return <Error message={msg} />;
	}

	return (
		<div className="BoardForm">
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
					<label>Description</label>
					<textarea
						className="form-control"
						name="description"
						onChange={handleInputChange}
						rows="3"
					/>
				</div>
				<div className="form-group">
					<label>Members</label>
					<UserSuggestion updateParent={handleMembers} multiSelect={true} />
				</div>
				<button type="submit" className="button button-primary float-right">
					Save
				</button>
			</form>
		</div>
	);
};

export default withRouter(BoardForm);
