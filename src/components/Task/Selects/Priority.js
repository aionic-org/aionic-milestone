import React from 'react';

import { InputSelect } from 'aionic-library';

const TaskSelectsPriority = (props) => {
	const { priorityList, defaultValue, value, onChange } = props;

	const options = priorityList.map((priority) => {
		return { value: priority.value, title: priority.title };
	});

	return (
		<div className="TaskSelectsPriority">
			<InputSelect
				optionList={options}
				name="priority"
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

TaskSelectsPriority.defaultProps = {
	priorityList: []
};

export default TaskSelectsPriority;
