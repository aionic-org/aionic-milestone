import React from 'react';

import { Api } from 'aionic-shared/js/';

const Announcement = (props) => {
	const { announcement, handleDelete } = props;

	const deleteAnnouncement = () => {
		Api.deleteData(`announcements/${announcement.id}`)
			.then(() => {
				handleDelete(announcement);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="Announcement card">
			<div className="card-body">
				<h5 className="card-title">{announcement.description}</h5>

				<p className="card-text">
					<small className="text-muted">
						{announcement.author.firstname}
						{announcement.author.lastname}@{announcement.created}
					</small>
					<button
						type="button"
						className="btn btn-danger btn-sm float-right"
						onClick={deleteAnnouncement}
					>
						Remove
					</button>
				</p>
			</div>
		</div>
	);
};

export default Announcement;
