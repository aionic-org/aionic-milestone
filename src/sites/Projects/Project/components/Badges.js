import React from 'react';

import { Badge } from 'aionic-library';

const ProjectBadges = ({ project }) => (
	<div className="ProjectBadges Badges">
		<div className="list-inline">
			{project.isClone ? (
				<div className="list-inline-item">
					<Badge label="Clone" margin={true} />
				</div>
			) : null}
			{project.completed ? (
				<div className="list-inline-item">
					<Badge label="Completed" type="success" margin={true} />
				</div>
			) : null}
		</div>
	</div>
);

export default ProjectBadges;
