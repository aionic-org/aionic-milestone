import React from 'react';
import { withRouter } from 'react-router-dom';

import Api from 'services/api';

const TaskCreate = (props) => {
	const { task } = props;

	const createTask = () => {
		Api.postData('tasks', { task })
			.then((res) => {
				props.history.push(`/task/${res.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="TaskCreate">
			<button type="button" className="btn btn-primary" onClick={createTask}>
				<i className="fas fa-plus mr-2" />
				Create and save
			</button>
		</div>
	);
};

export default withRouter(TaskCreate);
