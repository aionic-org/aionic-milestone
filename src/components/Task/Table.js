import React from 'react';
import { Link } from 'react-router-dom';

import { Spinner, useFetcher } from 'aionic-library';

import Session from '../../services/session';
import Helper from '../../services/helper';
import { WatchedItems } from '../../services/constants';

const TaskTable = (props) => {
	const { tasks, taskIDs, title } = props;

	const [fetchedTasks, isLoading, error] = useFetcher(taskIDs.length ? 'tasks' : '', {
		ids: Session.getWatchedItems(WatchedItems.TASK).join(',')
	});

	if (isLoading) {
		return <Spinner margin={true} />;
	} else {
		// Order by task status
		const tasksToShow = (tasks.length ? tasks : fetchedTasks)
			.slice()
			.sort((a, b) => (a.status.sort < b.status.sort ? -1 : 1));

		return (
			<div className="TaskTable">
				{title.length ? (
					<small className="d-block text-muted font-weight-bold mb-2">{title}</small>
				) : null}
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Status</th>
								<th scope="col">Assignee</th>
								<th scope="col">Deadline</th>
								<th scope="col">Completed</th>
							</tr>
						</thead>
						<tbody>
							{tasksToShow.map((task) => (
								<tr key={task.id}>
									<td style={{ textDecoration: task.completed ? 'line-through' : 'unset' }}>
										<Link to={`/tasks/${task.id}`}>{task.title}</Link>
									</td>
									<td>
										{' '}
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
									<td>{String(task.completed)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
};

TaskTable.defaultProps = {
	tasks: [],
	taskIDs: [],
	title: ''
};

export default TaskTable;
