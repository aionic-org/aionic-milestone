import React from 'react';

import RichEditor from 'components/UI/Input/RichEditor/';

const TaskDescription = (props) => {
	const { task, updateParentTaskState } = props;

	const updateDescription = (description) => {
		if (JSON.stringify(task.description) !== JSON.stringify(description)) {
			updateParentTaskState({ ...task, description });
		}
	};

	return (
		<div className="TaskDescription mt-5">
			<p className="text-muted font-weight-bold">Description</p>
			<hr className="featurette-divider" />
			<RichEditor content={task.description} updateParent={updateDescription} />
		</div>
	);
};

export default TaskDescription;
