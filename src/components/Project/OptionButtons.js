import React from 'react';
import { Link } from 'react-router-dom';

const ProjectOptionButtons = (props) => {
	const { project, updateParentProjectState } = props;

	const toggleComplete = () => {
		updateParentProjectState({ ...project, completed: !project.completed });
	};

	const completeBtn = project.completed ? (
		<button type="button" className="btn btn-warning" onClick={toggleComplete}>
			<i className="fas fa-redo mr-2" /> Reopen
		</button>
	) : (
		<button type="button" className="btn btn-mint" onClick={toggleComplete}>
			<i className="fas fa-check mr-2" />
			Mark complete
		</button>
	);

	return (
		<div className="ProjectOptionButtons">
			<div className="float-md-right">
				<Link to={`${project.id}/kanban`} className="btn btn-link mr-2">
					Kanban
				</Link>
				{completeBtn}
				<div className="btn-group ml-2">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle disabled"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						More
					</button>
					<div className="dropdown-menu dropdown-menu-right">
						<button type="button" className="btn dropdown-item">
							<i className="fas fa-share fa-fw mr-2" /> Share
						</button>
						<button type="button" className="btn dropdown-item">
							<i className="fas fa-print fa-fw mr-2" /> Print
						</button>
						<button type="button" className="dropdown-item">
							<i className="fas fa-archive fa-fw mr-2" /> Archive
						</button>
						<div className="dropdown-divider" />
						<button type="button" className="btn dropdown-item text-danger">
							<i className="fas fa-trash fa-fw mr-2" /> Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ProjectOptionButtons.defaultProps = {
	assignedClasses: []
};

export default ProjectOptionButtons;
