import React from 'react';

import InputSelect from 'components/UI/Input/Select';

const TaskSelectsPriority = (props) => {
	const priorities = props.priorityList.map((priority) => {
		return { value: priority.value, title: priority.title };
	});

	return (
		<div className="TaskSelectsPriority">
			<InputSelect optionList={priorities} name="priority" {...props} />
		</div>
	);
};

TaskSelectsPriority.defaultProps = {
	priorityList: [],
	defaultValue: '',
	classes: []
};

export default TaskSelectsPriority;
