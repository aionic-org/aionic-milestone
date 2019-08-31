import React from 'react';

import Session from 'services/session';
import useTab from 'components/Utility/Hooks/useTab';

import Navs from 'components/UI/Navs';

import TaskCommentsContainer from 'components/Task/Comments/container';
import TaskGitContainer from 'components/Task/Git/container';
import TaskScratchpad from 'components/Task/Scratchpad';
import TaskProjectsContainer from 'components/Task/Projects/container';
import TaskLinks from 'components/Task/Links';

const SitesTaskTabs = (props) => {
	const { task, updateParentTaskState } = props;
	const [tab, changeTab] = useTab('');

	const tabs = [
		{ name: 'Comments' },
		{ name: 'Scratchpad' },
		{ name: 'GitHub' },
		{ name: 'Projects' },
		{ name: 'Links' }
	];

	let content = <p className="text-muted text-center font-italic mt-2">No tab selected</p>;
	switch (tab) {
		case 'Comments':
			content = <TaskCommentsContainer taskId={task.id} />;
			break;
		case 'Scratchpad':
			content = <TaskScratchpad task={task} user={Session.getUser()} />;
			break;
		case 'GitHub':
			content = <TaskGitContainer task={task} updateTask={updateParentTaskState} />;
			break;
		case 'Projects':
			content = <TaskProjectsContainer taskId={task.id} showDescription={true} />;
			break;
		case 'Links':
			content = <TaskLinks task={task} updateTask={updateParentTaskState} />;
			break;
		default:
			break;
	}

	return (
		<div className="SitesTaskTabs">
			<Navs handleClick={changeTab} tabs={tabs} />
			<div className={`SitesTaskTabs px-2 ${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default SitesTaskTabs;