import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { Api, Pills } from 'aionic-library';

import Helper from '../../services/helper';

import KanbanStatus from './Status';
import KanbanFilters from './Filters';

const Kanban = (props) => {
	const { taskList, userList, statusList } = props;

	const [currentTasks, setCurrentTasks] = useState(taskList);
	const [stretch, setStretch] = useState(false);

	const [taskFilter, setTaskFilter] = useState('');

	const filteredTasks = currentTasks.filter((task) =>
		task.title.toLowerCase().includes(taskFilter)
	);

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

	const handleUserChange = async (firstname, userID) => {
		if (userID) {
			try {
				const userTaskList = await Api.fetchData(`users/${userID}/tasks`);
				setCurrentTasks(userTaskList);
			} catch (err) {
				setCurrentTasks([]);
				console.log(err);
			}
		} else {
			setCurrentTasks(taskList);
		}
	};

	const toggleStretch = () => {
		setStretch(!stretch);
	};

	const handleTaskDrop = async (taskID, statusID) => {
		const taskIdx = currentTasks.findIndex((task) => task.id === taskID);

		const currentTasksCopy = currentTasks.slice();
		const taskToUpdate = currentTasksCopy[taskIdx];

		if (taskToUpdate.status.id !== statusID) {
			taskToUpdate.status = statusList.find((status) => status.id === statusID);

			currentTasksCopy[taskIdx] = taskToUpdate;

			await Api.putData(`tasks/${taskToUpdate.id}`, {
				task: taskToUpdate
			});
			setCurrentTasks(currentTasksCopy);
		}
	};

	const tabs = tabTitles.length ? (
		<div className="col-auto">
			<Pills tabs={tabTitles} handleClick={handleUserChange} />
		</div>
	) : null;

	return (
		<div className="Kanban">
			<div className="row">
				<div className="col-3 d-flex align-items-center">
					<KanbanFilters setTaskFilter={setTaskFilter} toggleStretch={toggleStretch} />
				</div>
				{tabs}
			</div>
			<DndProvider backend={Backend}>
				<div className="row flex-nowrap overflow-auto mt-4" style={{ padding: '0px 5px' }}>
					{statusList.map((status) => {
						const tasks = filteredTasks.filter(
							(task) => task.status && task.status.id === status.id
						);
						return (
							<KanbanStatus
								key={status.id}
								status={status}
								tasks={tasks}
								maxWidth={stretch ? 30 : Math.max(100 / statusList.length, 15)}
								handleTaskDrop={handleTaskDrop}
								stretch={stretch}
							/>
						);
					})}
				</div>
			</DndProvider>
		</div>
	);
};

Kanban.defaultProps = {
	taskList: [],
	userList: [],
	statusList: Helper.getTaskStatus()
};

export default Kanban;
