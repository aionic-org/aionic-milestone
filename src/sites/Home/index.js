import React from 'react';

import { Session } from 'aionic-library';

import Title from '../../components/UI/Title';

import TaskDashboard from 'components/Task/Dashboard';

const SitesHome = () => (
	<div className="SitesHome">
		<Title title={`Welcome back, ${Session.getUser().firstname}!`} />
		<div className="row">
			<div className="col-12">
				<TaskDashboard userId={Session.getUser().id} />
			</div>
		</div>
	</div>
);

export default SitesHome;
