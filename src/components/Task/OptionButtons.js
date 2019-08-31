import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

import Api from 'services/api';

import MiscShare from 'components//Misc/Share';

import TaskCreate from './Create';

const TaskOptionButtons = (props) => {
	const { task, isNewTask, updateParentTaskState } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openShareModal = () => {
		setModalContent(<MiscShare endpoint={`tasks/${task.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const toggleComplete = () => {
		updateParentTaskState({ ...task, completed: !task.completed });
	};

	const deleteTask = () => {
		Api.deleteData(`tasks/${task.id}`)
			.then(() => {
				props.history.push(`/`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	let statusBtn = null;
	let moreBtn = null;
	if (isNewTask) {
		statusBtn = <TaskCreate task={task} />;
	} else {
		statusBtn = task.completed ? (
			<button type="button" className="btn btn-warning" onClick={toggleComplete}>
				<i className="fas fa-redo mr-2" /> Reopen
			</button>
		) : (
			<button type="button" className="btn btn-mint" onClick={toggleComplete}>
				<i className="fas fa-check mr-2" />
				Mark complete
			</button>
		);
		moreBtn = (
			<div className="btn-group ml-2">
				<button
					type="button"
					className="btn btn-primary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					More
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-2" /> Share
					</button>
					<button type="button" className="btn dropdown-item">
						<i className="fas fa-print fa-fw mr-2" /> Print
					</button>
					<div className="dropdown-divider" />
					<button type="button" className="btn dropdown-item text-danger" onClick={deleteTask}>
						<i className="fas fa-trash fa-fw mr-2" /> Delete
					</button>
				</div>
				<ReactModal
					isOpen={showModal}
					contentLabel="Minimal Modal Example"
					className="Modal"
					overlayClassName="Modal-Overlay"
				>
					<div className="modal-header">
						<h5 className="modal-title">Share task</h5>
						<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">{modalContent}</div>
				</ReactModal>
			</div>
		);
	}

	return (
		<div className="TaskOptionButtons">
			<div className="float-md-right">
				{statusBtn}
				{moreBtn}
			</div>
		</div>
	);
};

TaskOptionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(TaskOptionButtons);
