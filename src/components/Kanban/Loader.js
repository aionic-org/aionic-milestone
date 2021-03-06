import React from 'react';

import ContentLoader from 'react-content-loader';

const KanbanLoader = () => (
	<ContentLoader height={65} width={400} speed={1} ariaLabel="Loading kanban...">
		<rect x="0" y="0" rx="4" ry="4" width="130" height="40" />
		<rect x="135" y="0" rx="4" ry="4" width="130" height="40" />
		<rect x="270" y="0" rx="4" ry="4" width="130" height="40" />
	</ContentLoader>
);

export default KanbanLoader;
