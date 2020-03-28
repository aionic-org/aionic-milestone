import React from 'react';

import { InputSelect } from 'aionic-library';

const GitRepositorySelect = (props) => {
	const { repoList, defaultValue, value, onChange, disabled } = props;

	const options = repoList.map((repo) => {
		return { value: repo.id, title: repo.name };
	});

	return (
		<div className="GitRepositorySelect">
			<InputSelect
				optionList={options}
				name="repository"
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
};

GitRepositorySelect.defaultProps = {
	repoList: []
};

export default GitRepositorySelect;
