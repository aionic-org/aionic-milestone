import React from 'react';

import { Session } from 'aionic-library';

import Content from '../../components/UI/Content';
import Title from '../../components/UI/Title';

import TaskTable from '../../components/Task/Table';
import UserTaskDashboardContainer from '../../components/User/Task/DashboardContainer';

import './Home.css';

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
				<div className="row mt-5">
					<div className="col-12">
						<p className="d-inline-block text-muted font-weight-bold">
							Tasks watched: {Session.getUser().tasksWatched.length}
						</p>
						<TaskTable tasks={Session.getUser().tasksWatched} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesHome;
