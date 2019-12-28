import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import ReactModal from 'react-modal';

import { Api, Session, Button } from 'aionic-library';

import MiscShare from '../../../components/Misc/Share';

import TaskCreate from '../../../components/Task/Create';
import TaskMove from '../../../components/Task/Move';
import TaskPlugins from '../../../components/Task/Plugins';
import TaskWatch from '../../../components/Task/Watch';

const TaskActionButtons = (props) => {
	const { task, isNewTask, updateParentTaskState } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({ title: null, content: null });

	const assignToMe = () => {
		updateParentTaskState({ ...task, assignee: Session.getUser() });
	};

	const toggleComplete = () => {
		updateParentTaskState({ ...task, completed: !task.completed });
	};

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
			content: <TaskMove task={task} updateParentTaskState={updateParentTaskState} />
		});
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
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
		statusBtn =
			!task.assignee || (task.assignee && task.assignee.id !== Session.getUser().id) ? (
				<Button label="Assign to me" type="secondary" onClickHandler={assignToMe} />
			) : null;
		moreBtn = (
			<div className="ml-2">
				<button
					type="button"
					className="button button-primary"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i className="fas fa-ellipsis-h" />
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<h6 className="dropdown-header">Actions</h6>
					{task.completed ? (
						<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
							<i className="fas fa-redo fa-fw mr-2" /> Reopen
						</button>
					) : (
						<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
							<i className="fas fa-check fa-fw mr-2" /> Complete
						</button>
					)}
					{!task.isClone ? (
						<button type="button" className="btn dropdown-item" onClick={cloneTask}>
							<i className="fas fa-clone fa-fw mr-2" /> Clone
						</button>
					) : null}

					<h6 className="dropdown-header">Project</h6>
					{task.project ? (
						<div>
							<Link to={`/projects/${task.project.id}`} className="btn dropdown-item mr-2">
								<i className="fas fa-table fa-fw mr-2" /> View
							</Link>
							<Link to={`/projects/${task.project.id}/kanban`} className="btn dropdown-item mr-2">
								<i className="fas fa-grip-horizontal fa-fw mr-2" /> Kanban
							</Link>
						</div>
					) : null}
					<button type="button" className="btn dropdown-item" onClick={openMoveTaskModal}>
						<i className="fas fa-exchange-alt fa-fw mr-2" /> Move
					</button>

					<h6 className="dropdown-header">Share</h6>
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-2" /> Share
					</button>
					<button type="button" className="btn dropdown-item" onClick={window.print}>
						<i className="fas fa-print fa-fw mr-2" /> Print
					</button>
					<TaskWatch task={task} />

					<h6 className="dropdown-header">More</h6>
					<button type="button" className="btn dropdown-item" onClick={openPluginsModal}>
						<i className="fas fa-plug fa-fw mr-2" /> Plugins
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
						<h5 className="modal-title">{modalContent.title}</h5>
						<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">{modalContent.content}</div>
				</ReactModal>
			</div>
		);
	}

	return (
		<div className="TaskActionButtons">
			<div className="float-md-right btn-toolbar">
				{statusBtn}
				{moreBtn}
			</div>
		</div>
	);
};

TaskActionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(TaskActionButtons);
