import React from 'react';

import Badge from 'components/UI/Badge';

const ProjectBadges = (props) => {
	const { project } = props;

	return (
		<div className="ProjectBadges Badges">
			<div className="list-inline">
				{project.completed ? (
					<div className="list-inline-item">
						<Badge title="Completed" large={true} assignedClasses={['badge-primary']} />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectBadges;
