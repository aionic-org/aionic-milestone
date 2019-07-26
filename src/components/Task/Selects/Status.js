import React from 'react';
import InputSelect from 'components/UI/Input/Select';

const TaskSelectsStatus = (props) => {
	const status = props.statusList.map((taskStatus) => {
		return { value: taskStatus.id, title: taskStatus.title };
	});

	return (
		<div className="TaskSelectsStatus">
			<InputSelect
				optionList={status}
				name="status"
				defaultValue={props.defaultValue}
				onChange={props.onChange}
			/>
		</div>
	);
};

TaskSelectsStatus.defaultProps = {
	statusList: [],
	defaultValue: ''
};

export default TaskSelectsStatus;
