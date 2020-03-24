import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Button } from 'aionic-library';

import Helper from '../../../services/helper';

import Tags from '../../Tags';

import TaskTitle from '../Title';
import TaskDescription from '../Description';
import TaskSummaryContainer from '../Summary/container';

const TaskForm = (props) => {
	const { initialTask, handleCreate } = props;

	const [task, setTask] = useState({ ...initialTask });

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(task, e, setTask);
	};

	const handleTagsChange = (tags) => {
		setTask({ ...task, tags });
	};

	const createTask = async () => {
		const newTask = await Api.postData('tasks', { task });

		if (typeof handleCreate === 'function') {
			handleCreate(newTask);
			setTask({ ...initialTask });
		} else {
			props.history.push(`/tasks/${newTask.id}`);
		}
	};

	return (
		<div className="TaskForm">
			<div className="row">
				<div className="col">
					<TaskTitle task={task} onBlur={handleTitleChange} />
				</div>
				<div className="col-auto">
					<div className="TaskCreate">
						<Button label="Save" onClickHandler={createTask} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-auto">
					<Tags tags={task.tags} updateParentState={handleTagsChange} />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-12">
					<TaskSummaryContainer task={task} updateParentTaskState={setTask} />
					<TaskDescription task={task} updateParentTaskState={setTask} />
				</div>
			</div>
		</div>
	);
};

TaskForm.defaultProps = {
	initialTask: {}
};

export default withRouter(TaskForm);
