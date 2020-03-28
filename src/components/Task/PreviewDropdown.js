import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Api, Modal, Session } from 'aionic-library';

import MiscShare from '../Misc/Share';
import MiscWatch from '../Misc/Watch';

import { WatchedItems } from '../../services/constants';

const TaskPreviewDropdown = (props) => {
	const { task, handleWatch } = props;

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

	const projectBtn = task.project ? (
		<Link to={`/projects/${task.project.id}`} className="btn dropdown-item mr-1">
			<i className="fas fa-columns fa-fw mr-1" /> Project
		</Link>
	) : null;

	return (
		<div className="TaskPreviewDropdown">
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
					{projectBtn}
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-1" /> Share
					</button>
					<MiscWatch item={task} itemType={WatchedItems.TASK} handleWatch={handleWatch} />
				</div>
			</div>
			<Modal title="Share" isOpen={showModal} handleClose={handleCloseModal}>
				{modalContent}
			</Modal>
		</div>
	);
};

TaskPreviewDropdown.defaultProps = {
	handleWatch: () => {}
};

export default TaskPreviewDropdown;
