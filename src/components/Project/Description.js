import React from 'react';

const ProjectDescription = (props) => {
	const { project, updateParentProjectState } = props;

	const handleInputChange = (e) => {
		if (e.target.value !== project.description) {
			updateParentProjectState({ ...project, description: e.target.value });
		}
	};

	return (
		<div className="ProjectDescription">
			<div className="form-group mb-0">
				<textarea
					className="form-control"
					name="description"
					rows="3"
					defaultValue={project.description}
					onBlur={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default ProjectDescription;
