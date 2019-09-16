import React from 'react';

import Badge from 'components/UI/Badge';

const ProjectBadges = (props) => {
	const { project } = props;

	return (
		<div className="ProjectBadges Badges">
			<div className="list-inline">
				{project.isClone ? (
					<div className="list-inline-item">
						<Badge title="Clone" assignedClasses={['badge-info']} />
					</div>
				) : null}
				{project.completed ? (
					<div className="list-inline-item">
						<Badge title="Completed" assignedClasses={['badge-mint']} />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectBadges;
