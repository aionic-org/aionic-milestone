import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Helper from 'services/helper';

const ProjectTaskTable = (props) => {
	const { tasks } = props;

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
							<th scope="col">ID</th>
							<th scope="col">Title</th>
							<th scope="col">Status</th>
							<th scope="col">Assignee</th>
							<th scope="col">Deadline</th>
							<th scope="col">Completed</th>
							<th scope="col">Link</th>
						</tr>
					</thead>
					<tbody>
						{tasksToShow.map((task) => (
							<tr key={task.id}>
								<th scope="row">{task.id}</th>
								<td>{task.title}</td>
								<td>{task.status ? task.status.title : '-'}</td>
								<td>
									{task.assignee ? `${task.assignee.firstname} ${task.assignee.lastname}` : '-'}
								</td>
								<td>{Helper.formatDate(task.deadline)}</td>
								<td>{String(task.completed)}</td>
								<td>
									<Link
										to={`/tasks/${task.id}`}
										className="fas fa-fw fa-external-link-square-alt"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProjectTaskTable;
