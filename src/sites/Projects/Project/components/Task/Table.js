import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../../../../services/helper';
import Session from '../../../../../services/session';

import TaskSuggestion from '../../../../../components/Task/Suggestion';
import TaskFormModal from '../../../../../components/Task/Form/Modal';

const ProjectTaskTable = (props) => {
	const { project, tasks, updateProjectTasks } = props;

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

	const addCreatedTask = (newTask) => {
		const tasksCopy = tasks.slice();
		tasksCopy.push(newTask);
		updateProjectTasks(tasksCopy);
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
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{tasksCopy.map((task) => (
							<tr key={task.id}>
								<td style={{ textDecoration: task.completed ? 'line-through' : 'unset' }}>
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
			<div className="row mt-2 md-md-0 d-flex align-items-center">
				<div className="col">
					<TaskSuggestion
						taskListSelected={tasks}
						multiSelect={false}
						autoClear={true}
						smallInput={true}
						updateParent={addTask}
						placeholder="Add task"
					/>
				</div>
				<div className="col-auto">
					<TaskFormModal
						initialTask={{ project, author: Session.getUser() }}
						addTask={addCreatedTask}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectTaskTable;
