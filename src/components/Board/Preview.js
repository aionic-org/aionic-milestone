import React from 'react';
import { Link } from 'react-router-dom';

const BoardPreview = (props) => {
	const { board } = props;

	return (
		<Link to={`/boards/${board.id}`} className="BoardPreview card-link card">
			<div className="card-header font-weight-bold">
				<span>
					{board.title} ({board.users.length})
				</span>
			</div>
			<div className="card-body">
				<h6 className="card-subtitle text-muted mt-0">
					{board.author.firstname} {board.author.lastname}
				</h6>
				<p className={`card-text ${board.description ? 'mt-1' : ''}`}>{board.description}</p>
			</div>
			<div className="card-footer text-muted">
				<small>Updated: {board.updated} </small>
			</div>
		</Link>
	);
};

export default BoardPreview;
