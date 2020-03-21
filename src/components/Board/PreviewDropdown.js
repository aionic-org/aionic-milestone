import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactModal from 'react-modal';

import MiscShare from '../Misc/Share';
import MiscWatch from '../Misc/Watch';

import { WatchedItems } from '../../services/constants';

const BoardPreviewDropdown = (props) => {
	const { board, handleWatch } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openShareModal = (e) => {
		e.preventDefault();
		setModalContent(<MiscShare endpoint={`boards/${board.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = (e) => {
		setShowModal(false);
	};

	return (
		<div className="BoardPreviewDropdown">
			<div className="dropdown dropleft ml-3 cursor-pointer">
				<i
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i className="fas fa-ellipsis-v fa-sm"></i>
				</i>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link to={`/boards/${board.id}`} className="btn dropdown-item" target="_blank">
						<i className="fas fa-external-link-square-alt fa-fw mr-1" /> New tab
					</Link>
					<button type="button" className="btn dropdown-item" onClick={openShareModal}>
						<i className="fas fa-share fa-fw mr-1" /> Share
					</button>
					<MiscWatch item={board} itemType={WatchedItems.BOARD} handleWatch={handleWatch} />
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

BoardPreviewDropdown.defaultProps = {
	handleWatch: () => {}
};

export default BoardPreviewDropdown;
