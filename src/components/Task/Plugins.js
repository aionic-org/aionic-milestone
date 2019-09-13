import React from 'react';

import useTab from 'components/Utility/Hooks/useTab';

import Tabs from 'components/UI/Tabs';

import TaskGitContainer from 'components/Task/Git/container';

const TaskPlugins = (props) => {
	const { task, updateParentTaskState } = props;

	const [tab, changeTab] = useTab('');

	const tabs = [{ name: 'GitHub' }];

	let content = null;
	switch (tab) {
		case 'GitHub':
			content = <TaskGitContainer task={task} updateTask={updateParentTaskState} />;
			break;
		default:
			break;
	}

	return (
		<div className="TaskPlugins">
			<Tabs handleClick={changeTab} tabs={tabs} />
			<div className={`px-2 ${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default TaskPlugins;
