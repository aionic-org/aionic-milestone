import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Api, Session, Button, Modal } from 'aionic-library';

import { WatchedItems } from '../../../services/constants';

import MiscShare from '../../../components/Misc/Share';
import MiscWatch from '../../../components/Misc/Watch';

import TaskPlugins from '../../../components/Task/Plugins';

import TaskActionsClone from '../../../components/Task/Actions/Clone';
import TaskActionsComplete from '../../../components/Task/Actions/Complete';
import TaskActionsMove from '../../../components/Task/Actions/Move';
import TaskActionsProject from '../../../components/Task/Actions/Project';

const TaskActionButtons = (props) => {
	const { task, updateParentTaskState } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({ title: null, content: null });

	const assignToMe = () => {
		updateParentTaskState({ ...task, assignee: Session.getUser() });
	};

	const openShareModal = () => {
		setModalContent({
			title: 'Share',
			content: <MiscShare endpoint={`tasks/${task.id}/share`} />
		});
		setShowModal(true);
	};

	const openPluginsModal = () => {
		setModalContent({
			title: 'Plugins',
			content: <TaskPlugins task={task} updateParentTaskState={updateParentTaskState} />
		});
		setShowModal(true);
	};

	const openMoveTaskModal = () => {
		setModalContent({
			title: 'Move',
			content: <TaskActionsMove task={task} updateParentTaskState={updateParentTaskState} />
		});
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const deleteTask = async () => {
		await Api.deleteData(`tasks/${task.id}`);
		props.history.push(`/`);
	};

	const assignBtn =
		!task.assignee || (task.assignee && task.assignee.id !== Session.getUser().id) ? (
			<Button label="Assign to me" type="primary" onClickHandler={assignToMe} />
		) : null;

	const moreBtn = (
		<div className="ml-2">
			<button
				type="button"
				className="button button-secondary"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				<i className="fas fa-ellipsis-h" />
			</button>
			<div className="dropdown-menu dropdown-menu-right">
				<h6 className="dropdown-header">Actions</h6>
				<TaskActionsComplete task={task} updateParentTaskState={updateParentTaskState} />
				<TaskActionsClone task={task} />

				<TaskActionsProject task={task} openMoveTaskModal={openMoveTaskModal} />

				<h6 className="dropdown-header">Share</h6>
				<button type="button" className="btn dropdown-item" onClick={openShareModal}>
					<i className="fas fa-share fa-fw mr-1" /> Share
				</button>
				<button type="button" className="btn dropdown-item" onClick={window.print}>
					<i className="fas fa-print fa-fw mr-1" /> Print
				</button>

				<MiscWatch item={task} itemType={WatchedItems.TASK} />

				<h6 className="dropdown-header">More</h6>
				<button type="button" className="btn dropdown-item" onClick={openPluginsModal}>
					<i className="fas fa-plug fa-fw mr-1" /> Plugins
				</button>

				<div className="dropdown-divider" />
				<button type="button" className="btn dropdown-item text-danger" onClick={deleteTask}>
					<i className="fas fa-trash fa-fw mr-1" /> Delete
				</button>
			</div>
			<Modal title={modalContent.title} isOpen={showModal} handleClose={handleCloseModal}>
				{modalContent.content}
			</Modal>
		</div>
	);

	return (
		<div className="TaskActionButtons">
			<div className="float-md-right btn-toolbar">
				{assignBtn}
				{moreBtn}
			</div>
		</div>
	);
};

TaskActionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(TaskActionButtons);
