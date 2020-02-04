import React, { useState } from 'react';

import { Api, Session } from 'aionic-library';

const ProjectActionsWatch = (props) => {
	const { project, updateParentLoading } = props;

	const [isProjectWatched, setIsProjectWatched] = useState(
		Session.getUser().projectsWatched.find((wProject) => wProject.id === project.id)
	);

	const toggleProjectWatch = async () => {
		const { projectsWatched } = Session.getUser();

		if (isProjectWatched) {
			const projectIdx = projectsWatched.findIndex((wProject) => wProject.id === project.id);
			projectsWatched.splice(projectIdx, 1);
			setIsProjectWatched(false);
		} else {
			projectsWatched.push(project);
			setIsProjectWatched(true);
		}

		const user = { ...Session.getUser(), projectsWatched };

		updateParentLoading(true);

		await Api.putData(`users/${Session.getUser().id}`, {
			user
		});

		Session.setUser(user);
		updateParentLoading(false);
	};

	return (
		<div className="ProjectActionsWatch">
			{isProjectWatched ? (
				<button type="button" className="btn dropdown-item" onClick={toggleProjectWatch}>
					<i className="far fa-heart fa-fw mr-1" /> Unwatch
				</button>
			) : (
				<button type="button" className="btn dropdown-item" onClick={toggleProjectWatch}>
					<i className="fas fa-heart fa-fw mr-1" /> Watch
				</button>
			)}
		</div>
	);
};

ProjectActionsWatch.defaultProps = {
	updateParentLoading: () => {}
};

export default ProjectActionsWatch;
