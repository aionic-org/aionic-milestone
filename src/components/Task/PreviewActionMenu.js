import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';

import { Api, Session } from 'aionic-library';

import MiscShare from '../Misc/Share';

import TaskActionsWatch from './Actions/Watch';

const TaskPreviewActionMenu = (props) => {
	const { task } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openShareModal = () => {
		setModalContent(<MiscShare endpoint={`tasks/${task.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = (e) => {
		setShowModal(false);
	};

	const handleTaskWatch = (isLoading) => {
		setIsLoading(isLoading);
	};

	const assignToMe = (e) => {
		setIsLoading(true);
		const updatedTask = { ...task, assignee: Session.getUser() };

		Api.postData('tasks', { task: updatedTask })
			.then((res) => {
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	};

	const icon = isLoading ? (
		<i className="fas fa-spinner fa-spin"></i>
	) : (
		<i className="fas fa-ellipsis-v cursor-pointer"></i>
	);

	const assignBtn =
		!task.assignee || (task.assignee && task.assignee.id !== Session.getUser().id) ? (
			<button type="button" className="btn dropdown-item" onClick={assignToMe}>
				<i className="fas fa-user-tag fa-fw mr-1" /> Assign to me
			</button>
		) : null;

	return (
		<div className="TaskPreviewActionMenu">
			<div className="dropdown dropleft ml-3">
				<i
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{icon}
				</i>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link to={`/tasks/${task.id}`} className="btn dropdown-item" target="_blank">
						<i className="fas fa-external-link-square-alt fa-fw mr-1" /> New tab
					</Link>
					{assignBtn}
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-1" /> Share
					</button>
					<TaskActionsWatch task={task} updateParentLoading={handleTaskWatch} />
				</div>
			</div>
			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Share</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">{modalContent}</div>
			</ReactModal>
		</div>
	);
};

TaskPreviewActionMenu.defaultProps = {};

export default TaskPreviewActionMenu;
