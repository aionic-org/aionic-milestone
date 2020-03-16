import React from 'react';

import Loader from '../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const TaskLoader = () => (
	<Loader>
		<ContentLoader
			backgroundColor="#e1e1e1"
			foregroundColor="#eeeeee"
			viewBox="0 0 400 190"
			title="Loading task"
		>
			<rect x="0" y="5" rx="4" ry="4" width="35" height="8" />
			<rect x="40" y="5" rx="4" ry="4" width="35" height="8" />

			<rect x="0" y="20" rx="4" ry="4" width="260" height="15" />

			<rect x="0" y="45" rx="4" ry="4" width="40" height="10" />
			<rect x="45" y="45" rx="4" ry="4" width="40" height="10" />
			<rect x="90" y="45" rx="4" ry="4" width="40" height="10" />

			<rect x="0" y="80" rx="4" ry="4" width="80" height="10" />
			<rect x="90" y="80" rx="4" ry="4" width="80" height="10" />
			<rect x="180" y="80" rx="4" ry="4" width="80" height="10" />

			<rect x="0" y="95" rx="4" ry="4" width="80" height="10" />
			<rect x="90" y="95" rx="4" ry="4" width="80" height="10" />
			<rect x="180" y="95" rx="4" ry="4" width="80" height="10" />

			<rect x="0" y="120" rx="0" ry="0" width="260" height="70" />
		</ContentLoader>
	</Loader>
);

export default TaskLoader;
