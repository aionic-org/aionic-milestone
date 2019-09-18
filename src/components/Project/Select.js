import React from 'react';

import { InputSelect } from 'aionic-library';

const ProjectSelect = (props) => {
	const projects = props.projectList.map((project) => {
		return { value: project.id, title: project.title };
	});

	return (
		<div className="ProjectSelect">
			<InputSelect
				optionList={projects}
				name={props.name}
				defaultValue={props.defaultValue}
				onChange={props.onChange}
			/>
		</div>
	);
};

ProjectSelect.defaultProps = {
	projectList: [],
	onChange: () => {},
	defaultValue: ''
};

export default ProjectSelect;
