import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import queryString from 'query-string';

import UserForm from './Form';

const UserCreate = (props) => {
	const { location } = props;

	const { create } = queryString.parse(location.search);
	const [showModal, setShowModal] = useState(create === 'true'); // query param is of type string

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className="UserCreate">
			<div className="form-group">
				<button type="button" className="btn btn-primary btn-block" onClick={handleOpenModal}>
					<i className="fas fa-plus mr-2" />
					Create user
				</button>
			</div>

			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Create user</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<UserForm />
				</div>
			</ReactModal>
		</div>
	);
};

export default withRouter(UserCreate);
