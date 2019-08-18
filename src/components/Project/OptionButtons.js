import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

import MiscShare from 'components//Misc/Share';

const ProjectOptionButtons = (props) => {
	const { project, updateParentProjectState } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

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

	const completeBtn = project.completed ? (
		<button type="button" className="btn btn-warning" onClick={toggleComplete}>
			<i className="fas fa-redo mr-2" /> Reopen
		</button>
	) : (
		<button type="button" className="btn btn-mint" onClick={toggleComplete}>
			<i className="fas fa-check mr-2" />
			Mark complete
		</button>
	);

	return (
		<div className="ProjectOptionButtons">
			<div className="float-md-right">
				<Link to={`${project.id}/kanban`} className="btn btn-link mr-2">
					Kanban View
				</Link>
				{completeBtn}
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
						<button type="button" className="dropdown-item">
							<i className="fas fa-archive fa-fw mr-2" /> Archive
						</button>
						<div className="dropdown-divider" />
						<button type="button" className="btn dropdown-item text-danger">
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
					<h5 className="modal-title">Share project</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">{modalContent}</div>
			</ReactModal>
		</div>
	);
};

ProjectOptionButtons.defaultProps = {
	assignedClasses: []
};

export default ProjectOptionButtons;
