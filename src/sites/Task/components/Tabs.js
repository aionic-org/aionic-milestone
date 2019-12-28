import React from 'react';

import { Session, Tabs, useTab } from 'aionic-library';

import TaskCommentsContainer from 'components/Task/Comments/container';
import TaskScratchpad from 'components/Task/Scratchpad';
import TaskLinks from 'components/Task/Links';

const TaskTabs = (props) => {
	const { task, updateParentTaskState } = props;
	const [tab, changeTab] = useTab('');

	const tabs = [{ name: 'Comments' }, { name: 'Scratchpad' }, { name: 'Links' }];

	let content = null;
	switch (tab) {
		case 'Comments':
			content = <TaskCommentsContainer taskId={task.id} />;
			break;
		case 'Scratchpad':
			content = <TaskScratchpad task={task} user={Session.getUser()} />;
			break;
		case 'Links':
			content = <TaskLinks task={task} updateTask={updateParentTaskState} />;
			break;
		default:
			break;
	}

	return (
		<div className="TaskTabs">
			<Tabs handleClick={changeTab} tabs={tabs} />
			<div className={`TaskTabs px-2 ${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default TaskTabs;
