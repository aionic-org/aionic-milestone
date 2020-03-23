import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Button } from 'aionic-library';

import Helper from '../../services/helper';

import UserSuggestion from '../User/Suggestion';

const BoardDetails = (props) => {
	const { board, updateParentBoardState, deleteBoard, classes } = props;

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const updateMembers = (members) => {
		updateParentBoardState({ ...board, members });
	};

	const handleInputChange = (e) => {
		Helper.updateObjectPropByEvent(board, e, updateParentBoardState);
	};

	return (
		<div className={`BoardDetails ${classes.join(' ')}`}>
			<Button icon="fas fa-cog" type="secondary" onClickHandler={handleOpenModal} />
			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">{board.title} Details</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<div className="form-group">
						<label>Description</label>
						<textarea
							name="description"
							className="form-control mt-2"
							rows="3"
							defaultValue={board.description}
							onBlur={handleInputChange}
						/>
					</div>

					<div className="form-group">
						<label>Users</label>
						<UserSuggestion userListSelected={board.members} updateParent={updateMembers} />
					</div>
					<p className="text-muted d-block text-right mt-3">
						Updated: {Helper.formatDateTime(board.updated)}
					</p>
					<Button label="Delete" type="danger" block={true} onClickHandler={deleteBoard} />
				</div>
			</ReactModal>
		</div>
	);
};

BoardDetails.defaultProps = {
	classes: []
};

export default BoardDetails;
