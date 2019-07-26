import React from 'react';
import { Link } from 'react-router-dom';

const UserPreview = (props) => {
	const { user } = props;

	return (
		<Link to={`/user/${props.user.id}`} className="UserPreview CardLink card">
			<div className="card-body">
				<h5 className="card-title">
					{props.user.firstname} {props.user.lastname}
				</h5>
				<h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">ID: {props.user.id}</li>
			</ul>
		</Link>
	);
};

export default UserPreview;
