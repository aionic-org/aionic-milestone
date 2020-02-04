import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../services/helper';

import BoardPreviewActionMenu from './PreviewActionMenu';

const BoardPreview = (props) => {
	const { board } = props;

	return (
		<div className="BoardPreview card">
			<div className="card-body">
				<h5 className="card-title">
					<div className="row">
						<div className="col">
							<Link to={`/boards/${board.id}`}>
								{board.title} ({board.users.length})
							</Link>
						</div>
						<div className="col-auto d-flex align-items-center">
							<BoardPreviewActionMenu board={board} />
						</div>
					</div>
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					{board.author.firstname} {board.author.lastname}
				</h6>
				<p className="card-text">{board.description}</p>
				<p className="card-text">
					<small className="text-muted">Created: {Helper.formatDate(board.created)}</small>
				</p>
			</div>
		</div>
	);
};

export default BoardPreview;
