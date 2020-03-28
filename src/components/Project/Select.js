import React from 'react';

import { InputSelect } from 'aionic-library';

const ProjectSelect = (props) => {
	const { projectList, name, defaultValue, value, onChange } = props;

	const projects = projectList.map((project) => {
		return { value: project.id, title: project.title };
	});

	return (
		<div className="ProjectSelect">
			<InputSelect
				optionList={projects}
				name={name}
				defaultValue={defaultValue}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

ProjectSelect.defaultProps = {
	projectList: []
};

export default ProjectSelect;
