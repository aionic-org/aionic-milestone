import React from 'react';

import Session from '../../services/session';
import { WatchedItems } from '../../services/constants';

import Title from '../../components/UI/Title';
import TaskTable from '../../components/Task/Table';

import TaskDashboard from 'components/Task/Dashboard';

const SitesHome = () => (
	<div className="SitesHome">
		<Title title={`Welcome back, ${Session.getUser().firstname}!`} />
		<div className="row">
			<div className="col-12">
				<TaskDashboard userId={Session.getUser().id} />
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-12">
				<TaskTable
					taskIDs={Session.getWatchedItems(WatchedItems.TASK)}
					title={`Watched: ${Session.getWatchedItems(WatchedItems.TASK).length}`}
				/>
			</div>
		</div>
	</div>
);

export default SitesHome;
