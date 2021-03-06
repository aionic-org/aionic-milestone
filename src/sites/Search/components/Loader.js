import React from 'react';

import Loader from '../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const SearchLoader = () => (
	<Loader wrapContent={false}>
		<ContentLoader viewBox="0 0 400 170" speed={1} ariaLabel="Loading tasks...">
			<rect x="0" y="15" rx="4" ry="4" width="400" height="45" />
			<rect x="0" y="70" rx="4" ry="4" width="400" height="45" />
			<rect x="0" y="125" rx="4" ry="4" width="400" height="45" />
		</ContentLoader>
	</Loader>
);

export default SearchLoader;
