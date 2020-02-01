import React from 'react';

import ContentLoader from 'react-content-loader';

const TaskDashboardLoader = () => (
	<ContentLoader height={50} width={400} speed={1} ariaLabel="Loading tasks...">
		<rect x="0" y="5" rx="4" ry="4" width="195" height="45" />
		<rect x="205" y="5" rx="4" ry="4" width="195" height="45" />
	</ContentLoader>
);

export default TaskDashboardLoader;
