import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Helper from 'services/helper';

const UserTable = (props) => {
	const { users } = props;

	const [filterText, setFilterText] = useState('');
	const [usersFiltered, setUsersFiltered] = useState([]);

	const filterUsers = (e) => {
		const input = e.target.value;
		const keysLookup = ['id', 'firstname', 'lastname', 'email', 'created'];

		setFilterText(input);

		const newUsersFiltered = users.filter((user) => {
			for (const key of keysLookup) {
				if (
					String(user[key])
						.toLowerCase()
						.includes(input.toLowerCase())
				) {
					return true;
				}
			}
			return false;
		});

		setUsersFiltered(newUsersFiltered);
	};

	const usersToShow = filterText.length ? usersFiltered : users;

	return (
		<div className="UserTable">
			<input
				type="text"
				className="form-control form-control form-control-sm mb-2"
				placeholder="Filter..."
				onChange={filterUsers}
			/>
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Fistname</th>
							<th scope="col">Lastname</th>
							<th scope="col">Email</th>
							<th scope="col">Role</th>
							<th scope="col">Active</th>
							<th scope="col">Joined</th>
							<th scope="col">Link</th>
						</tr>
					</thead>
					<tbody>
						{usersToShow.map((user) => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<td>{user.firstname}</td>
								<td>{user.lastname}</td>
								<td>{user.email}</td>
								<td>{user.userRole ? user.userRole.name : '-'}</td>
								<td>{String(user.active)}</td>
								<td>{Helper.formatDate(user.created)}</td>
								<td>
									<Link
										to={`/users/${user.id}`}
										className="fas fa-fw fa-external-link-square-alt"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserTable;
