import React, { useState } from 'react';

import { Button, Modal } from 'aionic-library';

import BoardForm from './';

const BoardFormModal = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="BoardFormModal">
			<Button label="Create board" onClickHandler={toggleModal}></Button>
			<Modal title="Create board" isOpen={showModal} handleClose={toggleModal}>
				<BoardForm />
			</Modal>
		</div>
	);
};

export default BoardFormModal;
