import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

import { Api } from 'aionic-shared';

import MiscShare from 'components//Misc/Share';

const BoardActionButtons = (props) => {
	const { board } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openShareModal = () => {
		setModalContent(<MiscShare endpoint={`boards/${board.id}/share`} />);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const deleteBoard = () => {
		Api.deleteData(`boards/${board.id}`)
			.then(() => {
				props.history.push(`/boards`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="BoardActionButtons">
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
					<button type="button" className="btn dropdown-item text-danger" onClick={deleteBoard}>
						<i className="fas fa-trash fa-fw mr-2" /> Delete
					</button>
				</div>
			</div>
			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Share board</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">{modalContent}</div>
			</ReactModal>
		</div>
	);
};

BoardActionButtons.defaultProps = {
	assignedClasses: []
};

export default withRouter(BoardActionButtons);
