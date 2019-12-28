import React from 'react';
import InputSelect from 'components/UI/Input/Select';

const TaskSelectsType = (props) => {
	const types = props.typeList.map((type) => {
		return { value: type.id, title: type.title };
	});

	return (
		<div className="TaskSelectsType">
			<InputSelect optionList={types} name="type" {...props} />
		</div>
	);
};

TaskSelectsType.defaultProps = {
	typeList: [],
	defaultValue: '',
	classes: []
};

export default TaskSelectsType;