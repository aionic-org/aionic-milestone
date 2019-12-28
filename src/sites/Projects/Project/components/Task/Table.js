import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../../../../services/helper';

import TaskSuggestion from '../../../../../components/Task/Suggestion';

const ProjectTaskTable = (props) => {
	const { tasks, updateProjectTasks } = props;

	const [filterText, setFilterText] = useState('');
	const [tasksFiltered, setTasksFiltered] = useState([]);

	const filterTasks = (e) => {
		const input = e.target.value;
		const keysLookup = ['id', 'title', 'deadline'];

		setFilterText(input);

		const newTasksFiltered = tasks.filter((task) => {
			for (const key of keysLookup) {
				if (
					String(task[key])
						.toLowerCase()
						.includes(input.toLowerCase())
				) {
					return true;
				}
			}
			return false;
		});

		setTasksFiltered(newTasksFiltered);
	};

	const removeTask = (e) => {
		const taskToRemoveID = Number(e.target.dataset.id);
		const newTasks = tasks.filter((task) => task.id !== taskToRemoveID);

		updateProjectTasks(newTasks);
	};

	const addTask = (newTasks) => {
		const existingTask = tasks.find((task) => task.id === newTasks.id);

		if (existingTask === undefined) {
			const tasksCopy = tasks.slice();
			tasksCopy.push(newTasks[newTasks.length - 1]);

			updateProjectTasks(newTasks);
		}
	};

	const tasksToShow = filterText.length ? tasksFiltered : tasks;

	return (
		<div className="ProjectTaskTable">
			<input
				type="text"
				className="form-control form-control-sm mb-2"
				placeholder="Filter tasks..."
				onChange={filterTasks}
			/>
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Status</th>
							<th scope="col">Assignee</th>
							<th scope="col">Deadline</th>
							<th scope="col">Completed</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
						{tasksToShow.map((task) => (
							<tr key={task.id}>
								<td>
									<Link to={`/tasks/${task.id}`}>{task.title}</Link>
								</td>
								<td>{task.status ? task.status.title : '-'}</td>
								<td>
									{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'}
								</td>
								<td>{Helper.formatDate(task.deadline)}</td>
								<td>{String(task.completed)}</td>
								<td>
									<i
										className="fas fa-times"
										style={{ cursor: 'pointer', color: '#d63031' }}
										onClick={removeTask}
										data-id={task.id}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<TaskSuggestion
				taskListSelected={tasks}
				multiSelect={false}
				autoClear={true}
				smallInput={true}
				updateParent={addTask}
			/>
		</div>
	);
};

export default ProjectTaskTable;
