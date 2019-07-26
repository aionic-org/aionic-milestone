import React from 'react';

import InputSelect from 'components/UI/Input/Select';

const TaskSelectsPriority = (props) => {
	const priorities = props.priorityList.map((priority) => {
		return { value: priority.value, title: priority.title };
	});

	return (
		<div className="TaskSelectsPriority">
			<InputSelect
				optionList={priorities}
				name="priority"
				defaultValue={props.defaultValue}
				onChange={props.onChange}
			/>
		</div>
	);
};

TaskSelectsPriority.defaultProps = {
	priorityList: [],
	defaultValue: ''
};

export default TaskSelectsPriority;
