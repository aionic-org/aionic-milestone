import React from 'react';

import Loader from '../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const ProjectsLoader = () => (
	<Loader title="Projects">
		<ContentLoader
			backgroundColor="#e1e1e1"
			foregroundColor="#eeeeee"
			viewBox="0 0 400 155"
			title="Loading projects"
		>
			<rect x="0" y="0" rx="0" ry="0" width="125" height="45" />
			<rect x="135" y="0" rx="0" ry="0" width="125" height="45" />
			<rect x="270" y="0" rx="0" ry="0" width="125" height="45" />

			<rect x="0" y="55" rx="4" ry="4" width="150" height="10" />
			<rect x="165" y="55" rx="4" ry="4" width="70" height="10" />
			<rect x="245" y="55" rx="4" ry="4" width="70" height="10" />
			<rect x="325" y="55" rx="4" ry="4" width="70" height="10" />

			<rect x="0" y="70" rx="4" ry="4" width="400" height="45" />
			<rect x="0" y="125" rx="4" ry="4" width="400" height="45" />
		</ContentLoader>
	</Loader>
);

export default ProjectsLoader;
