import React from 'react';

import Helper from '../../../services/helper';

import TaskTabs from './Tabs';

const TaskSidebar = (props) => {
	const { task, updateParentTaskState } = props;

	return (
		<div className="TaskSidebar">
			<TaskTabs task={task} updateParentTaskState={updateParentTaskState} />
			<p className="text-muted mt-4 mb-0">
				Created: {Helper.formatDateTime(task.created || Date.now())}
			</p>
			<p className="text-muted">Updated: {Helper.formatDateTime(task.updated || Date.now())}</p>
		</div>
	);
};

export default TaskSidebar;
