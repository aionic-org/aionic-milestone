import React, { useState } from 'react';

import { Api, Pills } from 'aionic-library';

import Helper from '../../services/helper';

import KanbanLoader from './Loader';

import KanbanStatus from './Status';
import KanbanFilters from './Filters';

const Kanban = (props) => {
	const { taskList, userList, statusList } = props;

	const [currentTasks, setCurrentTasks] = useState(taskList);
	const [isLoading, setIsLoading] = useState(false);
	const [stretch, setStretch] = useState(false);

	const [taskFilters, setTaskFilters] = useState({
		textFilter: '',
		typeFilter: 0,
		priorityFilter: 0
	});

	const filteredTasks = currentTasks.filter((task) => {
		const condText = taskFilters.textFilter.length
			? task.title.toLowerCase().includes(taskFilters.textFilter)
			: true;
		const condType = taskFilters.typeFilter ? task.type.id === taskFilters.typeFilter : true;
		const condPrio = taskFilters.priorityFilter
			? task.priority.value === taskFilters.priorityFilter
			: true;

		return condText && condType && condPrio;
	});

	const tabTitles = userList.map((user) => {
		const userNameDuplicates = userList.filter((user2) => {
			return user2.id !== user.id && user2.firstname === user.firstname;
		});

		return {
			id: user.id,
			name: userNameDuplicates.length
				? `${user.firstname} ${user.lastname.charAt(0)}.`
				: user.firstname
		};
	});

	const fetchUserTasks = async (userId) => {
		setCurrentTasks([]);

		try {
			setIsLoading(true);
			const userTaskList = await Api.fetchData(`users/${userId}/tasks`);

			setIsLoading(false);
			setCurrentTasks(userTaskList);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = (firstname, userId) => {
		if (userId) {
			fetchUserTasks(userId);
		} else {
			setCurrentTasks([]);
		}
	};

	const toggleStretch = () => {
		setStretch(!stretch);
	};

	const loadingSpinner = isLoading ? (
		<div className="row mt-3">
			<div className="col-12">
				<KanbanLoader />
			</div>
		</div>
	) : null;

	const tabs = tabTitles.length ? (
		<div className="row">
			<div className="col-auto mb-4">
				<Pills tabs={tabTitles} handleClick={handleClick} />
			</div>
		</div>
	) : null;

	return (
		<div className="Kanban">
			{tabs}
			<KanbanFilters
				toggleStretch={toggleStretch}
				taskFilters={taskFilters}
				setTaskFilters={setTaskFilters}
			/>
			<div className="row flex-nowrap overflow-auto mt-3" style={{ padding: '0px 5px' }}>
				{statusList.map((status) => {
					const tasks = filteredTasks.filter((task) => task.status && task.status.id === status.id);
					return (
						<KanbanStatus
							key={status.id}
							title={status.title}
							tasks={tasks}
							maxWidth={stretch ? 25 : Math.max(100 / statusList.length, 15)}
							{...props}
						/>
					);
				})}
			</div>
			{loadingSpinner}
		</div>
	);
};

Kanban.defaultProps = {
	taskList: [],
	userList: [],
	statusList: Helper.getTaskStatus()
};

export default Kanban;
