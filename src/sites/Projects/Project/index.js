import React from 'react';

import Helper from '../../../services/helper';

import Content from '../../../components/UI/Content';
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

	return (
		<div className="SitesProject">
			<Content>
				<ProjectBadges project={project} />
				<div className="row">
					<div className="col-12 col-md-7 col-xl">
						<InputTitle
							defaultValue={project.title}
							placeholder="Enter project title"
							onBlur={handleTitleChange}
						/>
					</div>
					<div className="col-12 col-md-5 col-xl-auto">
						<ProjectActionButtons
							project={project}
							updateParentProjectState={updateParentProjectState}
						/>
					</div>
				</div>
				<hr className="featurette-divider" />

				<ProjectWidgetbar project={project} />

				<div className="row">
					<div className="col-12 col-xl-8">
						<ProjectTaskTable tasks={project.tasks} updateProjectTasks={updateProjectTasks} />
					</div>
					<div className="col-12 col-xl-4 mt-3 mt-xl-0">
						<ProjectTabs project={project} updateParentProjectState={updateParentProjectState} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesProject;
