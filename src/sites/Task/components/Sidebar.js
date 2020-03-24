import React from 'react';

import Helper from '../../../services/helper';

import TaskTabs from './Tabs';

const TaskSidebar = (props) => {
	const { task, updateParentTaskState } = props;

	return (
		<div className="TaskSidebar h-100 d-flex flex-column">
			<TaskTabs task={task} updateParentTaskState={updateParentTaskState} />
			<div className="mt-xl-auto text-right pt-4">
				<p className="text-muted mb-0">
					Created: {Helper.formatDateTime(task.created || Date.now())}
				</p>
				<p className="text-muted mb-0">
					Updated: {Helper.formatDateTime(task.updated || Date.now())}
				</p>
			</div>
		</div>
	);
};

export default TaskSidebar;
