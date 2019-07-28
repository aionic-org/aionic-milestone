import React from 'react';

import Helper from 'services/helper';

import Content from 'components/UI/Content';

import TaskTitle from 'components/Task/Title';
import TaskTags from 'components/Task/Tags';
import TaskSummaryContainer from 'components/Task/Summary/container';
import TaskDescription from 'components/Task/Description';
import TaskOptionButtons from 'components/Task/OptionButtons';
import TaskDates from 'components/Task/Dates';

import SitesTaskTabs from './components/Tabs';
import TaskBadges from './components/Badges';

const SitesTask = (props) => {
	const { task, updateParentTaskState, isNewTask } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(task, e, updateParentTaskState);
	};

	return (
		<div className="SitesTask">
			<Content>
				<TaskBadges task={task} />
				<div className="row">
					<div className="col-12 col-md-7 col-xl">
						<TaskTitle task={task} onBlur={handleTitleChange} />
					</div>
					<div className="col-12 col-md-5 col-xl-auto">
						<TaskOptionButtons
							task={task}
							isNewTask={isNewTask}
							updateParentTaskState={updateParentTaskState}
						/>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div className="row">
					<div className="col-auto">
						<TaskTags task={task} updateTask={updateParentTaskState} />
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-xl-8">
						<TaskSummaryContainer task={task} updateParentTaskState={updateParentTaskState} />
						<TaskDates task={task} updateParentTaskState={updateParentTaskState} />
						<TaskDescription task={task} updateTask={updateParentTaskState} />
					</div>
					<div className="col-12 col-xl-4 mt-3 mt-xl-0">
						<SitesTaskTabs task={task} updateParentTaskState={updateParentTaskState} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesTask;
