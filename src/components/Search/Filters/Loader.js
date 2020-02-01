import React from 'react';

import ContentLoader from 'react-content-loader';

const SearchFiltersLoader = () => (
	<ContentLoader viewBox="0 0 100 115" speed={1} title="Loading filters...">
		<rect x="0" y="0" rx="2" ry="2" width="100" height="15" />
		<rect x="0" y="25" rx="2" ry="2" width="100" height="15" />
		<rect x="0" y="50" rx="2" ry="2" width="100" height="15" />
		<rect x="0" y="75" rx="2" ry="2" width="100" height="15" />
		<rect x="0" y="100" rx="2" ry="2" width="100" height="15" />
	</ContentLoader>
);

export default SearchFiltersLoader;
