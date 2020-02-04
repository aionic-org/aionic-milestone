import React from 'react';

import { Session } from 'aionic-library';

import Content from '../../components/UI/Content';
import Title from '../../components/UI/Title';

import TaskTable from '../../components/Task/Table';

import './Home.css';
import TaskDashboard from 'components/Task/Dashboard';
import ProjectTable from 'components/Project/Table';

const SitesHome = () => {
	return (
		<div className="SitesHome">
			<Content>
				<Title title={`Welcome back, ${Session.getUser().firstname}!`} />
				<div className="row">
					<div className="col-12">
						<TaskDashboard userId={Session.getUser().id} />
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-12">
						<TaskTable
							tasks={Session.getUser().tasksWatched}
							title={`Tasks watched: ${Session.getUser().tasksWatched.length}`}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<ProjectTable
							projects={Session.getUser().projectsWatched}
							title={`Projects watched: ${Session.getUser().projectsWatched.length}`}
						/>
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesHome;
