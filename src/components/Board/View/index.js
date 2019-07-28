import React, { useState } from 'react';

import Api from 'services/api';

import useTextFilter from 'components/Utility/Hooks/useTextFilter';

import Spinner from 'components/UI/Spinner';
import Tabs from 'components/UI/Tabs';

import BoardStatus from './Status';

const Board = (props) => {
	const { userList, statusList } = props;

	const [userTasks, setUserTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [userTasksFiltered, setUserTasksFiltered] = useTextFilter('title', userTasks);

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
			const taskList = await Api.fetchData(`users/${userId}/tasks`);

			setIsLoading(false);
			setUserTasks(taskList);
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

	return (
		<div className="Board">
			<div className="row">
				<div className="col-auto">
					<Tabs tabs={tabTitles} handleClick={handleClick} />
				</div>
				<div className="col-12">
					<div className="form-group mt-4 mb-0">
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Filter tasks..."
							onChange={filterTasks}
						/>
					</div>
				</div>
			</div>
			<div />
			<div className="row mt-2">
				{statusList.map((status) => {
					const tasks = (userTasksFiltered.length ? userTasksFiltered : userTasks).filter(
						(task) => task.status.id === status.id
					);
					return (
						<BoardStatus
							key={status.id}
							status={status}
							tasks={tasks}
							maxWidth={100 / statusList.length}
						/>
					);
				})}
			</div>
			{loadingSpinner}
		</div>
	);
};

export default Board;
