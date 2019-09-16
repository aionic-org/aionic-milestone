import React from 'react';

import { Session } from 'aionic-shared/js/';

import Content from 'components/UI/Content';
import Title from 'components/UI/Title';

import UserDetailsContainer from 'components/User/Details/container';

import SitesUserTabsContent from './components/Tabs';

const SitesUser = (props) => {
	const { user, handleInputChange, deleteUser } = props;

	return (
		<div className="SitesUser">
			<Content>
				<Title title={`About ${user.firstname}`} />
				<div className="row">
					<div className="col-12 col-xl-8">
						<UserDetailsContainer user={user} handleInputChange={handleInputChange} />
						{Session.isAdmin() ? (
							<button
								type="button"
								className="btn btn-danger float-right ml-2"
								onClick={deleteUser}
							>
								Remove
							</button>
						) : null}
					</div>
				</div>

				<div className="row">
					<div className="col-xl-8 mt-3">
						<SitesUserTabsContent user={user} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesUser;
