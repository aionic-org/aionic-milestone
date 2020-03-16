import React from 'react';

import Loader from '../../UI/Loader';

import ContentLoader from 'react-content-loader';

const TaskDashboardLoader = () => (
	<Loader>
		<ContentLoader
			backgroundColor="#e1e1e1"
			foregroundColor="#eeeeee"
			viewBox="0 0 400 50"
			speed={1}
			title="Loading tasks"
		>
			<rect x="0" y="5" rx="4" ry="4" width="195" height="45" />
			<rect x="205" y="5" rx="4" ry="4" width="195" height="45" />
		</ContentLoader>
	</Loader>
);

export default TaskDashboardLoader;
