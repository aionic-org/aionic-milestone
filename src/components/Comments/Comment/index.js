import React from 'react';

import Session from 'services/session';
import Helper from 'services/helper';

const Comment = (props) => {
	const { comment, deleteComment } = props;

	return (
		<div className="Comment list-group-item">
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{`${comment.author.firstname} ${comment.author.lastname}`}</h5>
				<small>
					{comment.author.id === Session.getUser().id ? (
						<i
							className="fas fa-times text-danger"
							onClick={() => {
								deleteComment(comment.id);
							}}
							style={{ cursor: 'pointer' }}
						/>
					) : null}
				</small>
			</div>
			<p className="mb-1">{comment.text}</p>
			<small className="text-muted">{Helper.formatDateTime(comment.created)}</small>
		</div>
	);
};

export default Comment;
