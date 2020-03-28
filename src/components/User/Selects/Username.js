import React from 'react';

import { InputSelect } from 'aionic-library';

const UserSelectsUsername = (props) => {
	const { userList, name, defaultValue, value, onChange } = props;

	const options = userList.map((user) => {
		return { value: user.id, title: `${user.firstname} ${user.lastname}` };
	});

	return (
		<div className="UserSelectsUsername">
			<InputSelect
				optionList={options}
				name={name}
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

UserSelectsUsername.defaultProps = {
	userList: [],
	name: 'user'
};

export default UserSelectsUsername;
