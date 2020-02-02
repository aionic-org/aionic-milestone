import React from 'react';

import Loader from '../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const ProjectsLoader = () => (
	<Loader title="Projects">
		<ContentLoader viewBox="0 0 400 155" speed={1} title="Loading projects...">
			<rect x="0" y="0" rx="0" ry="0" width="125" height="35" />
			<rect x="135" y="0" rx="0" ry="0" width="125" height="35" />
			<rect x="270" y="0" rx="0" ry="0" width="125" height="35" />

			<rect x="0" y="40" rx="4" ry="4" width="150" height="10" />
			<rect x="165" y="40" rx="4" ry="4" width="70" height="10" />
			<rect x="245" y="40" rx="4" ry="4" width="70" height="10" />
			<rect x="325" y="40" rx="4" ry="4" width="70" height="10" />

			<rect x="0" y="55" rx="4" ry="4" width="400" height="45" />
			<rect x="0" y="110" rx="4" ry="4" width="400" height="45" />
		</ContentLoader>
	</Loader>
);

export default ProjectsLoader;
