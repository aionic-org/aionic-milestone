import React from 'react';
import InputSelect from 'components/UI/Input/Select';

const UserSelect = (props) => {
	const users = props.userList.map((user) => {
		return { value: user.id, title: `${user.firstname} ${user.lastname}` };
	});

	return (
		<div className="UserSelect">
			<InputSelect
				optionList={users}
				name={props.name}
				defaultValue={props.defaultValue}
				onChange={props.onChange}
			/>
		</div>
	);
};

UserSelect.defaultProps = {
	userList: [],
	onChange: () => {},
	defaultValue: ''
};

export default UserSelect;
