import React from 'react';

import Loader from '../../UI/Loader';

import ContentLoader from 'react-content-loader';

const SearchFiltersLoader = () => (
	<Loader>
		<ContentLoader
			backgroundColor="#e1e1e1"
			foregroundColor="#eeeeee"
			viewBox="0 0 100 115"
			title="Loading filters"
		>
			<rect x="0" y="0" rx="2" ry="2" width="100" height="15" />
			<rect x="0" y="25" rx="2" ry="2" width="100" height="15" />
			<rect x="0" y="50" rx="2" ry="2" width="100" height="15" />
			<rect x="0" y="75" rx="2" ry="2" width="100" height="15" />
			<rect x="0" y="100" rx="2" ry="2" width="100" height="15" />
		</ContentLoader>
	</Loader>
);

export default SearchFiltersLoader;
