import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Button } from 'aionic-library';

import TaskForm from './';

const TaskFormModal = (props) => {
	const { initialTask, addTask } = props;

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const createTask = (newTask) => {
		addTask(newTask);
		setShowModal(false);
	};

	return (
		<div className="TaskFormModal">
			<Button
				label="Create task"
				block={true}
				onClickHandler={handleOpenModal}
				small={true}
			></Button>
			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal large"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Create task</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<TaskForm initialTask={initialTask} handleCreate={createTask} />
				</div>
			</ReactModal>
		</div>
	);
};

TaskFormModal.defaultProps = {
	initialTask: {}
};

export default TaskFormModal;
