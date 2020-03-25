import React, { useState } from 'react';

import { Button, Modal } from 'aionic-library';

import TaskForm from './';

const TaskFormModal = (props) => {
	const { initialTask, addTask } = props;

	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const createTask = (newTask) => {
		addTask(newTask);
		setShowModal(false);
	};

	return (
		<div className="TaskFormModal">
			<Button label="Create task" block={true} onClickHandler={toggleModal} small={true}></Button>
			<Modal title="Create task" isOpen={showModal} large={true} handleClose={toggleModal}>
				<TaskForm initialTask={initialTask} handleCreate={createTask} />
			</Modal>
		</div>
	);
};

TaskFormModal.defaultProps = {
	initialTask: {}
};

export default TaskFormModal;
