import React from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Button } from 'aionic-library';

const TaskCreate = (props) => {
	const { task } = props;

	const createTask = () => {
		Api.postData('tasks', { task })
			.then((res) => {
				props.history.push(`/tasks/${res.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="TaskCreate">
			<Button label="Create" icon="fas fa-plus" onClickHandler={createTask} />
		</div>
	);
};

export default withRouter(TaskCreate);
