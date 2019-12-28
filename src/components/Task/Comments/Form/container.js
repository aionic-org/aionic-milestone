import React from 'react';

import { Error } from 'aionic-library';

import useCommentForm from '../../../Utility/Hooks/useCommentForm';

import CommentForm from '../../../Comments/Form';

const TaskCommentsFormContainer = (props) => {
	const { taskId, updateParent } = props;
	const [msg, handleInputChange, handleSubmit] = useCommentForm(
		`tasks/${taskId}/comments`,
		updateParent
	);

	const msgHint = msg ? <Error message={msg} showIcon={false} assignedClasses={['mt-0']} /> : null;

	return (
		<div className="TaskCommentsFormContainer">
			<CommentForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
			{msgHint}
		</div>
	);
};

TaskCommentsFormContainer.defaultProps = {
	updateParent: () => {}
};

export default TaskCommentsFormContainer;
