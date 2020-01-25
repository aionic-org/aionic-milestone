import React from 'react';
import { withRouter } from 'react-router-dom';

import { Api } from 'aionic-library';

const TaskActionsClone = (props) => {
	const { task } = props;

	const cloneTask = () => {
		const newTask = { ...task, title: `CLONE: ${task.title}`, isClone: true };

		delete newTask.id;

		Api.postData('tasks', { task: newTask })
			.then((res) => {
				props.history.push(`/tasks/${res.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="TaskActionsClone">
			{!task.isClone ? (
				<button type="button" className="btn dropdown-item" onClick={cloneTask}>
					<i className="fas fa-clone fa-fw mr-1" /> Clone
				</button>
			) : null}
		</div>
	);
};

export default withRouter(TaskActionsClone);
