import React from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Button } from 'aionic-library';

const TaskCreate = (props) => {
	const { task, label, block, handleCreate } = props;

	const createTask = async () => {
		const newTask = await Api.postData('tasks', { task });

		if (typeof handleCreate === 'function') {
			handleCreate(newTask);
		} else {
			props.history.push(`/tasks/${newTask.id}`);
		}
	};

	return (
		<div className="TaskCreate">
			<Button label={label} onClickHandler={createTask} block={block} />
		</div>
	);
};

TaskCreate.defaultProps = {
	label: 'Save',
	block: false
};

export default withRouter(TaskCreate);
