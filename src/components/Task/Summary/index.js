import React from 'react';

import { Session, InputDate } from 'aionic-library';

import Helper from '../../../services/helper';

import InputSuggestion from '../../UI/Input/Suggestion';

import TaskSelectsStatus from '../Selects/Status';
import TaskSelectsPriority from '../Selects/Priority';

const TaskSummary = (props) => {
	const { lists, task, updateParentTaskState } = props;
	const { priorityList, statusList, userList } = lists;

	const userListPrepared = userList.map((user) => {
		return {
			id: user.id,
			text: `${user.firstname} ${user.lastname}`
		};
	});

	const handleInputSuggestion = (element) => {
		updateParentTaskState({ ...task, [element.name]: element.id });
	};

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(task, e, updateParentTaskState);
	};

	const updateDeadline = (deadline) => {
		updateParentTaskState({ ...task, deadline });
	};

	return (
		<div className="TaskSummary">
			<p className="text-muted font-weight-bold">Summary</p>
			<hr className="featurette-divider" />

			<div className="form-group row">
				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Status</label>
					<div className="col-12">
						<TaskSelectsStatus
							statusList={statusList}
							defaultValue={task.status ? task.status.id : undefined}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Priority</label>
					<div className="col-12">
						<TaskSelectsPriority
							priorityList={priorityList}
							defaultValue={task.priority ? task.priority.value : undefined}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Project</label>
					<div className="col-12">
						<input
							type="text"
							className="form-control"
							placeholder="Project"
							readOnly={true}
							value={`${task.project ? task.project.key : '-'}`}
						/>
					</div>
				</div>
			</div>

			<div className="form-group row">
				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Assignee</label>
					<div className="col-12">
						<InputSuggestion
							elementList={userListPrepared}
							name="assignee"
							placeholder="Enter username"
							defaultValue={task.assignee ? task.assignee.id : undefined}
							updateParent={handleInputSuggestion}
						/>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Author</label>
					<div className="col-12">
						<InputSuggestion
							elementList={userListPrepared}
							name="author"
							placeholder="Enter username"
							defaultValue={task.author ? task.author.id || Session.getUser().id : ''}
							updateParent={handleInputSuggestion}
						/>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<label className="col-12 col-form-label">Deadline</label>
					<div className="col-12">
						<InputDate
							name="deadline"
							startDate={Helper.formatDateTime(task.deadline ? task.deadline : new Date())}
							updateParent={updateDeadline}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskSummary;
