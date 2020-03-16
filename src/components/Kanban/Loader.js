import React from 'react';

import ContentLoader from 'react-content-loader';

const KanbanLoader = () => (
	<ContentLoader
		backgroundColor="#e1e1e1"
		foregroundColor="#eeeeee"
		viewBox="0 0 400 65"
		ariaLabel="Loading Kanban"
	>
		<rect x="0" y="0" rx="4" ry="4" width="130" height="40" />
		<rect x="135" y="0" rx="4" ry="4" width="130" height="40" />
		<rect x="270" y="0" rx="4" ry="4" width="130" height="40" />
	</ContentLoader>
);

export default KanbanLoader;
