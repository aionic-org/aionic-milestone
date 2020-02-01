import React from 'react';

import ContentLoader from 'react-content-loader';

const TaskDashboardLoader = () => (
	<ContentLoader viewBox="0 0 400 50" speed={1} title="Loading tasks...">
		<rect x="0" y="5" rx="4" ry="4" width="195" height="45" />
		<rect x="205" y="5" rx="4" ry="4" width="195" height="45" />
	</ContentLoader>
);

export default TaskDashboardLoader;
