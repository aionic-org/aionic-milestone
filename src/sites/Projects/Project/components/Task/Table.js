import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../../../../services/helper';

import TaskSuggestion from '../../../../../components/Task/Suggestion';

const ProjectTaskTable = (props) => {
	const { tasks, updateProjectTasks } = props;

	const tasksCopy = tasks.slice().sort((a, b) => (a.status.sort < b.status.sort ? -1 : 1));

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

	return (
		<div className="ProjectTaskTable">
			<div className="table-responsive">
				<table className="table table-striped table-borderless">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Status</th>
							<th scope="col">Assignee</th>
							<th scope="col">Deadline</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
						{tasksCopy.map((task) => (
							<tr key={task.id}>
								<td>
									<Link to={`/tasks/${task.id}`}>{task.title}</Link>
								</td>
								<td>
									{task.status ? (
										<span
											className="badge text-white"
											style={{ backgroundColor: `${task.status.color}` }}
										>
											{task.status.title}
										</span>
									) : (
										'-'
									)}
								</td>
								<td>
									{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'}
								</td>
								<td>{Helper.formatDate(task.deadline)}</td>
								<td className="text-center">
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
			<div className="mt-2 mt-md-0">
				<TaskSuggestion
					taskListSelected={tasks}
					multiSelect={false}
					autoClear={true}
					smallInput={true}
					updateParent={addTask}
					placeholder="Add task"
				/>
			</div>
		</div>
	);
};

export default ProjectTaskTable;
