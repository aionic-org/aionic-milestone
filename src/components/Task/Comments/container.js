import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import TaskCommentsFormContainer from './Form/container';
import Comments from '../../Comments';

const TaskCommentsContainer = (props) => (
	<Fetcher url={`tasks/${props.taskId}/comments`} showSpinnerPadding={true}>
		{(comments, fetchData) => {
			const { taskId, showForm } = props;

			return (
				<div className="TaskCommentsContainer">
					{showForm ? <TaskCommentsFormContainer taskId={taskId} updateParent={fetchData} /> : null}
					<Comments type="Task" typeId={taskId} commentList={comments} />
				</div>
			);
		}}
	</Fetcher>
);

TaskCommentsContainer.defaultProps = {
	showForm: true
};

export default TaskCommentsContainer;
