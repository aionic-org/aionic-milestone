import React from 'react';

import Helper from 'services/helper';

import Content from '../../components/UI/Content';

import TaskTitle from '../../components/Task/Title';
import TaskTags from '../../components/Task/Tags';
import TaskSummaryContainer from '../../components/Task/Summary/container';
import TaskDescription from '../../components/Task/Description';

import TaskActionButtons from './components/ActionButtons';
import TaskBadges from './components/Badges';
import TaskSidebar from './components/Sidebar';

const SitesTask = (props) => {
	const { task, updateParentTaskState, isNewTask } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(task, e, updateParentTaskState);
	};

	const taskSidebar = isNewTask ? null : (
		<div className="col-12 col-xl-4 mt-3 mt-xl-0">
			<TaskSidebar task={task} updateParentTaskState={updateParentTaskState} />
		</div>
	);

	return (
		<div className="SitesTask">
			<Content>
				<TaskBadges task={task} />
				<div className="row">
					<div className="col-12 col-md-7 col-xl">
						<TaskTitle task={task} onBlur={handleTitleChange} />
					</div>
					<div className="col-12 col-md-5 col-xl-auto">
						<TaskActionButtons
							task={task}
							isNewTask={isNewTask}
							updateParentTaskState={updateParentTaskState}
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row">
					<div className="col-auto">
						<TaskTags task={task} updateParentTaskState={updateParentTaskState} />
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-xl-8">
						<TaskSummaryContainer task={task} updateParentTaskState={updateParentTaskState} />
						<TaskDescription task={task} updateParentTaskState={updateParentTaskState} />
					</div>
					{taskSidebar}
				</div>
			</Content>
		</div>
	);
};

export default SitesTask;
