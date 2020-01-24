import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../services/helper';

const BoardPreview = (props) => {
	const { board } = props;

	return (
		<Link to={`/boards/${board.id}`} className="BoardPreview card-link card">
			<div className="card-body">
				<h5 className="card-title">
					{board.title} ({board.users.length})
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					{board.author.firstname} {board.author.lastname}
				</h6>
				<p className="card-text">{board.description}</p>
				<p className="card-text">
					<small className="text-muted">Created: {Helper.formatDate(board.created)}</small>
				</p>
			</div>
		</Link>
	);
};

export default BoardPreview;
