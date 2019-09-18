import React from 'react';

import { Fetcher } from 'aionic-library';

import TaskCommentsFormContainer from './Form/container';
import Comments from '../../Comments';

const TaskCommentsContainer = (props) => (
	<Fetcher url={`tasks/${props.taskId}/comments`} showSpinnerPadding={true}>
		{(comments, fetchData) => {
			const { taskId, showForm } = props;

			return (
				<div className="TaskCommentsContainer">
					<Comments type="Task" typeId={taskId} commentList={comments} />
					{showForm ? (
						<div className={comments.length ? 'mt-4' : ''}>
							<TaskCommentsFormContainer taskId={taskId} updateParent={fetchData} />
						</div>
					) : null}
				</div>
			);
		}}
	</Fetcher>
);

TaskCommentsContainer.defaultProps = {
	showForm: true
};

export default TaskCommentsContainer;
