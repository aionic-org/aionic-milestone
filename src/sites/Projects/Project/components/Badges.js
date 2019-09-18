import React from 'react';

import { Badge } from 'aionic-library';

const ProjectBadges = (props) => {
	const { project } = props;

	return (
		<div className="ProjectBadges Badges">
			<div className="list-inline">
				{project.isClone ? (
					<div className="list-inline-item">
						<Badge label="Clone" />
					</div>
				) : null}
				{project.completed ? (
					<div className="list-inline-item">
						<Badge label="Completed" type="success" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectBadges;
