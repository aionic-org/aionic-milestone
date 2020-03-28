import React from 'react';
import { Link } from 'react-router-dom';

const TaskActionsProject = ({ task, openMoveTaskModal }) => (
	<div className="TaskActionsProject">
		<h6 className="dropdown-header">Project</h6>
		{task.project ? (
			<div>
				<Link to={`/projects/${task.project.id}`} className="btn dropdown-item mr-1">
					<i className="fas fa-table fa-fw mr-1" /> View
				</Link>
				<Link to={`/projects/${task.project.id}/kanban`} className="btn dropdown-item mr-1">
					<i className="fas fa-grip-horizontal fa-fw mr-1" /> Kanban
				</Link>
			</div>
		) : null}
		<button type="button" className="btn dropdown-item" onClick={openMoveTaskModal}>
			<i className="fas fa-exchange-alt fa-fw mr-1" /> Move
		</button>
	</div>
);

export default TaskActionsProject;
