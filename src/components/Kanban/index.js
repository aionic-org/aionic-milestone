import React, { useState } from 'react';

import Api from 'services/api';

import useTextFilter from 'components/Utility/Hooks/useTextFilter';

import Spinner from 'components/UI/Spinner';
import Tabs from 'components/UI/Tabs';

import BoardStep from './Step';

const Kanban = (props) => {
	const { taskList, userList, statusList } = props;

	const [userTasks, setUserTasks] = useState(taskList);
	const [isLoading, setIsLoading] = useState(false);
	const [userTasksFiltered, setUserTasksFiltered, filterText] = useTextFilter('title', userTasks);

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
		try {
			setIsLoading(true);
			const userTaskList = await Api.fetchData(`users/${userId}/tasks`);

			setIsLoading(false);
			setUserTasks(userTaskList);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = (firstname, userId) => {
		if (userId) {
			fetchUserTasks(userId);
		} else {
			setUserTasks([]);
		}
	};

	const filterTasks = (e) => {
		setUserTasksFiltered(e.target.value);
	};

	const loadingSpinner = isLoading ? (
		<div className="row mt-3">
			<div className="col-12">
				<Spinner />
			</div>
		</div>
	) : null;

	const tabs = tabTitles.length ? (
		<div className="mb-4">
			<Tabs tabs={tabTitles} handleClick={handleClick} />
		</div>
	) : null;

	return (
		<div className="Kanban">
			<div className="row">
				<div className="col-auto">{tabs}</div>
				<div className="col-12">
					<div className="form-group mb-0">
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Filter tasks..."
							onChange={filterTasks}
						/>
					</div>
				</div>
			</div>
			<div className="row flex-nowrap overflow-auto mt-2" style={{ padding: '0px 15px' }}>
				{statusList.map((status) => {
					const tasks = (filterText.length ? userTasksFiltered : userTasks).filter(
						(task) => task.status.id === status.id
					);
					return (
						<BoardStep
							key={status.id}
							title={status.title}
							tasks={tasks}
							maxWidth={Math.max(100 / statusList.length, 15)}
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
	userList: []
};

export default Kanban;
