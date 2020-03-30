import React, { useState } from 'react';

import { Button, Modal } from 'aionic-library';

import ProjectForm from './';

const ProjectFormModal = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="ProjectFormModal">
			<Button label="Create project" onClickHandler={toggleModal}></Button>
			<Modal title="Create project" isOpen={showModal} handleClose={toggleModal}>
				<ProjectForm />
			</Modal>
		</div>
	);
};

export default ProjectFormModal;
