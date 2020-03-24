import React from 'react';

import Helper from '../../../services/helper';

import InputTitle from '../../../components/UI/Input/Title';

import ProjectActionButtons from './components/ActionButtons';
import ProjectWidgetbar from './components/Widgetbar';
import ProjectTabs from './components/Tabs';
import ProjectBadges from './components/Badges';
import ProjectTaskTable from './components/Task/Table';

const SitesProject = (props) => {
	const { project, updateParentProjectState } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(project, e, updateParentProjectState);
	};

	const updateProjectTasks = (tasks) => {
		updateParentProjectState({ ...project, tasks });
	};

	const markComplete = (e) => {
		e.preventDefault();
		updateParentProjectState({ ...project, completed: true });
	};

	let allTasksCompleted = true;
	for (const task of project.tasks) {
		if (!task.completed) {
			allTasksCompleted = false;
			break;
		}
	}

	const completeAlert =
		!project.completed && allTasksCompleted ? (
			<div className="alert alert-warning alert-dismissible fade show" role="alert">
				All tasks seem to be done -{' '}
				<a href="#" onClick={markComplete}>
					Mark complete
				</a>
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		) : null;

	return (
		<div className="SitesProject">
			<ProjectBadges project={project} />
			<div className="row">
				<div className="col-10 col-md">
					<InputTitle
						defaultValue={project.title}
						placeholder="Enter project title"
						onBlur={handleTitleChange}
						completed={project.completed}
					/>
				</div>
				<div className="col-2 col-md-auto">
					<ProjectActionButtons
						project={project}
						updateParentProjectState={updateParentProjectState}
					/>
				</div>
			</div>

			<ProjectWidgetbar project={project} />

			{completeAlert}

			<div className="row">
				<div className="col-12 col-xl-8">
					<ProjectTaskTable
						tasks={project.tasks}
						updateProjectTasks={updateProjectTasks}
						project={project}
					/>
				</div>
				<div className="col-12 col-xl-4 mt-3 mt-xl-0">
					<ProjectTabs project={project} updateParentProjectState={updateParentProjectState} />
				</div>
			</div>
		</div>
	);
};

export default SitesProject;
