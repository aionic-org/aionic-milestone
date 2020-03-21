import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import queryString from 'query-string';

import { Button } from 'aionic-library';

import ProjectForm from './Form';

const ProjectsCreate = (props) => {
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
		<div className="ProjectsCreate">
			<div className="form-group">
				<Button label="Create project" block={true} onClickHandler={handleOpenModal} />
			</div>

			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Create new project</h5>
					<button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<ProjectForm />
				</div>
			</ReactModal>
		</div>
	);
};

export default withRouter(ProjectsCreate);
