import React from 'react';

import { InputSelect } from 'aionic-library';

const GitOrganizationSelect = (props) => {
	const { orgList, defaultValue, value, onChange } = props;

	const options = orgList.map((organization) => {
		return { value: organization.id, title: organization.name };
	});

	return (
		<div className="GitOrganizationSelect">
			<InputSelect
				optionList={options}
				name="organization"
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

GitOrganizationSelect.defaultProps = {
	orgList: []
};

export default GitOrganizationSelect;
