import React from 'react';

import Session from 'services/session';

import UserSelectsRole from '../Selects/Role';
import UserSelectsActive from '../Selects/Active';

const UserDetails = (props) => {
	const { user, roles, handleInputChange } = props;

	const allowEdit = Session.isAdmin();

	return (
		<div className="UserDetails">
			<div className="form-group row">
				<label className="col-sm-2 col-form-label">Firstname</label>
				<div className="col-sm-4">
					<input
						type="text"
						name="firstname"
						className="form-control"
						placeholder="Firstname"
						defaultValue={user.firstname}
						onBlur={handleInputChange}
						disabled={!allowEdit}
					/>
				</div>
				<label className="col-sm-2 col-form-label">Lastname</label>
				<div className="col-sm-4">
					<input
						type="text"
						name="lastname"
						className="form-control"
						placeholder="Lastname"
						defaultValue={user.lastname}
						onBlur={handleInputChange}
						disabled={!allowEdit}
					/>
				</div>
			</div>

			<div className="form-group row">
				<label className="col-sm-2 col-form-label">Email</label>
				<div className="col-sm-4">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						defaultValue={user.email}
						onBlur={handleInputChange}
						disabled={!allowEdit}
					/>
				</div>
				<label className="col-sm-2 col-form-label">Role</label>
				<div className="col-sm-4">
					<UserSelectsRole
						roleList={roles}
						defaultValue={user.userRole ? user.userRole.id : 0}
						showDefault={user.userRole}
						onChange={handleInputChange}
						disabled={!allowEdit}
					/>
				</div>
			</div>

			<div className="form-group row">
				<label className="col-sm-2 col-form-label">ID</label>
				<div className="col-sm-4">
					<input
						type="text"
						name="id"
						className="form-control"
						placeholder="ID"
						defaultValue={user.id}
						disabled
					/>
				</div>
				<label className="col-sm-2 col-form-label">Active</label>
				<div className="col-sm-4">
					<UserSelectsActive
						defaultValue={user.active}
						onChange={handleInputChange}
						disabled={!allowEdit}
					/>
				</div>
			</div>

			<div className="form-group row">
				<label className="col-sm-2 col-form-label">Status</label>
				<div className="col-sm-10">
					<textarea
						className="form-control"
						name="status"
						rows="2"
						defaultValue={user.status}
						onBlur={handleInputChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
