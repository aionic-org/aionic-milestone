import React from 'react';

import { Fetcher } from 'aionic-library';

import TaskDashboard from 'components/Task/Dashboard/';

const UserTaskDashboardContainer = (props) => (
	<Fetcher url={`users/${props.user.id}/tasks`}>
		{(tasks, fetchData) => {
			return (
				<div className="UserTaskDashboardContainer">
					<TaskDashboard taskList={tasks} updateParent={fetchData} />
				</div>
			);
		}}
	</Fetcher>
);

export default UserTaskDashboardContainer;
