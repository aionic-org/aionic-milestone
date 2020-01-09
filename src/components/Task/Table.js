import React from 'react';
import { Link } from 'react-router-dom';

import Helper from '../../services/helper';

const TaskTable = (props) => {
	const { tasks } = props;

	return (
		<div className="TaskTable">
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
						{tasks.map((task) => (
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
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

TaskTable.defaultProps = {
	tasks: []
};

export default TaskTable;
