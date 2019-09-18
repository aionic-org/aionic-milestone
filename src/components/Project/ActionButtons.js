import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

import { Api } from 'aionic-library';

import MiscShare from 'components/Misc/Share';

const ProjectActionButtons = (props) => {
	const { project, updateParentProjectState } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const cloneProject = () => {
		const newProject = {
			...project,
			title: `CLONE: ${project.title}`,
			isClone: true,
			tasks: [],
			key: null
		};

		delete newProject.id;
		delete newProject.tasks;

		Api.postData('projects', { project: newProject })
			.then((res) => {
				props.history.push(`/projects/${res.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const openShareModal = () => {
		setModalContent(<MiscShare endpoint={`projects/${project.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const toggleComplete = () => {
		updateParentProjectState({ ...project, completed: !project.completed });
	};

	const deleteProject = () => {
		Api.deleteData(`projects/${project.id}`)
			.then(() => {
				props.history.push(`/projects`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="ProjectActionButtons">
			<div className="float-md-right">
				<div>
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
						{project.completed ? (
							<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
								<i className="fas fa-redo fa-fw mr-2" /> Reopen
							</button>
						) : (
							<button type="button" className="btn dropdown-item" onClick={toggleComplete}>
								<i className="fas fa-check fa-fw mr-2" /> Complete
							</button>
						)}
						{!project.isClone ? (
							<button type="button" className="btn dropdown-item" onClick={cloneProject}>
								<i className="fas fa-clone fa-fw mr-2" /> Clone
							</button>
						) : null}

						<h6 className="dropdown-header">Views</h6>
						<Link to={`${project.id}/kanban`} className="btn dropdown-item mr-2">
							<i className="fas fa-grip-horizontal fa-fw mr-2" /> Kanban
						</Link>

						<h6 className="dropdown-header">Share</h6>
						<button type="button" className="btn dropdown-item" onClick={openShareModal}>
							<i className="fas fa-share fa-fw mr-2" /> Share
						</button>
						<button type="button" className="btn dropdown-item" onClick={window.print}>
							<i className="fas fa-print fa-fw mr-2" /> Print
						</button>
						<div className="dropdown-divider" />
						<button type="button" className="btn dropdown-item text-danger" onClick={deleteProject}>
							<i className="fas fa-trash fa-fw mr-2" /> Delete
						</button>
					</div>
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

ProjectActionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(ProjectActionButtons);
