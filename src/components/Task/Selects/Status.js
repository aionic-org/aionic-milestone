import React from 'react';

import { InputSelect } from 'aionic-library';

const TaskSelectsStatus = (props) => {
	const { statusList, defaultValue, value, onChange } = props;

	const options = statusList.map((taskStatus) => {
		return { value: taskStatus.id, title: taskStatus.title };
	});

	return (
		<div className="TaskSelectsStatus">
			<InputSelect
				optionList={options}
				name="status"
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

TaskSelectsStatus.defaultProps = {
	statusList: []
};

export default TaskSelectsStatus;
