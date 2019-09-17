import React from 'react';

import { InputSelect } from 'aionic-shared';

const UserSelectsRole = (props) => {
	const roles = props.roleList.map((role) => {
		return { value: role.id, title: role.name };
	});

	return (
		<div className="UserSelectsRole">
			<InputSelect
				optionList={roles}
				name="userRole"
				defaultValue={props.defaultValue}
				onChange={props.onChange}
				required={true}
				disabled={props.disabled}
				showDefault={props.showDefault}
			/>
		</div>
	);
};

UserSelectsRole.defaultProps = {
	roleList: [],
	defaultValue: '',
	disabled: false,
	showDefault: true
};

export default UserSelectsRole;
