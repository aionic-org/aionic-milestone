import React from 'react';

import './Home.css';

import { Session } from 'aionic-shared';

import Content from 'components/UI/Content';
import Title from 'components/UI/Title';

import UserTaskDashboardContainer from 'components/User/Task/Dashboard/container';

const SitesHome = () => {
	return (
		<div className="SitesHome">
			<Content>
				<Title title={`Welcome back, ${Session.getUser().firstname}!`} />
				<div className="row">
					<div className="col-12">
						<UserTaskDashboardContainer user={Session.getUser()} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesHome;
