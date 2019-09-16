import React from 'react';

import { Spinner } from 'aionic-shared';

import useFetcher from 'components/Utility/Hooks/useFetcher';

import Error from 'components/UI/Error';

import UserInvitation from 'components/User/Invitation';
import UserCreate from 'components/User/Create';
import UserTable from 'components/User/Table';

const AdministrationUsers = () => {
	const [users, isLoading, error] = useFetcher('users');

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="AdministrationUsers">
			<div className="row">
				<div className="col-12">
					<p className="mb-2">Invite or create a new user</p>
				</div>
				<div className="col-12 col-md-10">
					<UserInvitation />
				</div>
				<div className="col-2">
					<UserCreate />
				</div>
			</div>
			<hr className="featurette-divider" />
			<UserTable users={users} />
		</div>
	);
};

export default AdministrationUsers;
