import React from 'react';

import Content from '../../../../components/UI/Content';

import ContentLoader from 'react-content-loader';

const ProjectLoader = () => (
	<Content>
		<ContentLoader viewBox="0 0 400 115" speed={1} title="Loading project...">
			<rect x="0" y="0" rx="4" ry="4" width="260" height="10" />

			<rect x="0" y="20" rx="0" ry="0" width="90" height="35" />
			<rect x="103" y="20" rx="0" ry="0" width="90" height="35" />
			<rect x="206" y="20" rx="0" ry="0" width="90" height="35" />
			<rect x="309" y="20" rx="0" ry="0" width="90" height="35" />

			<rect x="0" y="60" rx="4" ry="4" width="260" height="10" />
			<rect x="0" y="75" rx="4" ry="4" width="260" height="50" />
			<rect x="0" y="130" rx="4" ry="4" width="260" height="10" />

			<rect x="275" y="60" rx="4" ry="4" width="125" height="10" />
			<rect x="275" y="75" rx="4" ry="4" width="125" height="10" />
			<rect x="275" y="90" rx="4" ry="4" width="125" height="10" />
			<rect x="275" y="105" rx="4" ry="4" width="125" height="10" />
		</ContentLoader>
	</Content>
);

export default ProjectLoader;
