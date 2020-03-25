import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal } from 'aionic-library';

import MiscShare from '../Misc/Share';
import MiscWatch from '../Misc/Watch';

import { WatchedItems } from '../../services/constants';

const ProjectPreviewDropdown = (props) => {
	const { project, handleWatch } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openShareModal = (e) => {
		e.preventDefault();
		setModalContent(<MiscShare endpoint={`projects/${project.id}/share`} />);
		setShowModal(true);
	};

	const toggleModal = (e) => {
		setShowModal(!showModal);
	};

	const icon = isLoading ? (
		<i className="fas fa-spinner fa-spin"></i>
	) : (
		<i className="fas fa-ellipsis-v fa-sm"></i>
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
					<MiscWatch item={project} itemType={WatchedItems.PROJECT} handleWatch={handleWatch} />
				</div>
			</div>
			<Modal title="Share" isOpen={showModal} handleClose={toggleModal}>
				{modalContent}
			</Modal>
		</div>
	);
};

ProjectPreviewDropdown.defaultProps = {
	handleWatch: () => {}
};

export default ProjectPreviewDropdown;
