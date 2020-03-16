import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';

import MiscShare from '../Misc/Share';

import ProjectActionsWatch from './Actions/Watch';

const ProjectPreviewDropdown = (props) => {
	const { project } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const handleProjectWatch = (isLoading) => {
		setIsLoading(isLoading);
	};

	const openShareModal = (e) => {
		e.preventDefault();
		setModalContent(<MiscShare endpoint={`projects/${project.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = (e) => {
		setShowModal(false);
	};

	const icon = isLoading ? (
		<i className="fas fa-spinner fa-spin"></i>
	) : (
		<i className="fas fa-ellipsis-v cursor-pointer"></i>
	);

	return (
		<div className="ProjectPreviewDropdown">
			<div className="dropdown dropleft ml-3 cursor-pointer">
				<i
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{icon}
				</i>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link to={`/projects/${project.id}`} className="btn dropdown-item" target="_blank">
						<i className="fas fa-external-link-square-alt fa-fw mr-1" /> New tab
					</Link>
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-1" /> Share
					</button>
					<Link to={`projects/${project.id}/kanban`} className="btn dropdown-item mr-2">
						<i className="fas fa-grip-horizontal fa-fw mr-1" /> Kanban
					</Link>
					<ProjectActionsWatch project={project} updateParentLoading={handleProjectWatch} />
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

ProjectPreviewDropdown.defaultProps = {};

export default ProjectPreviewDropdown;
