import React from 'react';

import useTab from 'components/Utility/Hooks/useTab';

import Navs from 'components/UI/Navs';

import ProjectCommentsContainer from 'components/Project/Comments/container';
import TaskSuggestion from 'components/Task/Suggestion';
import ProjectDetails from 'components/Project/Details';

const SitesProjectTabs = (props) => {
	const { project, updateParentProjectState } = props;
	const [tab, changeTab] = useTab('Details');

	const tabs = [{ name: 'Details' }, { name: 'Tasks' }, { name: 'Comments' }];

	const updateProjectTasks = (tasks) => {
		updateParentProjectState({ ...project, tasks });
	};

	let content = <p className="text-muted text-center font-italic mt-2">No tab selected</p>;
	switch (tab) {
		case 'Details':
			content = (
				<ProjectDetails project={project} updateParentProjectState={updateParentProjectState} />
			);
			break;
		case 'Tasks':
			content = (
				<TaskSuggestion
					taskListSelected={project.tasks}
					updateParent={updateProjectTasks}
					label="Add or remove tasks to this project"
				/>
			);
			break;
		case 'Comments':
			content = <ProjectCommentsContainer projectId={project.id} />;
			break;
		default:
			break;
	}

	return (
		<div className="SitesProjectTabs">
			<Navs handleClick={changeTab} tabs={tabs} preselectTabIdx={0} />
			<div className={`SitesProjectTabs px-2 ${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default SitesProjectTabs;
