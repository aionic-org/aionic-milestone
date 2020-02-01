import React, { useState } from 'react';

import { useFetcher } from 'aionic-library';

import Deck from 'components/Deck';

import TaskDashboardFilters from './Filters';
import TaskDashboardLoader from './Loader';

const TaskDashboard = (props) => {
	const { userId } = props;

	const [tasks, isLoading, error] = useFetcher(`users/${userId}/tasks`);
	const [tasksFiltered, setTasksFiltered] = useState([]);
	const [statusFilterId, setStatusFilterId] = useState(null);

	const filterTasksByStatus = (_statusId) => {
		setStatusFilterId(_statusId);

		if (_statusId !== null) {
			setTasksFiltered(tasks.filter((task) => task.status && task.status.id === _statusId));
		} else {
			setTasksFiltered([]);
		}
	};

	const tasksToShow = statusFilterId !== null ? tasksFiltered : tasks;

	const content = isLoading ? (
		<TaskDashboardLoader />
	) : (
		<Deck itemList={tasksToShow} deckType="task" itemsPerRow={2} showItemsNumber={true} />
	);

	return (
		<div className="TaskDashboard">
			<TaskDashboardFilters handleStatusChange={filterTasksByStatus} />
			{content}
		</div>
	);
};

TaskDashboard.defaultProps = {
	updateParent: () => {}
};

export default TaskDashboard;
