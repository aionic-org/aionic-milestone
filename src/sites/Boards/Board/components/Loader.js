import React from 'react';

import Loader from '../../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const BoardLoader = () => (
	<Loader>
		<ContentLoader viewBox="0 0 400 105" speed={1} title="Loading board...">
			<rect x="0" y="0" rx="4" ry="4" width="260" height="10" />

			<rect x="0" y="30" rx="4" ry="4" width="30" height="10" />
			<rect x="35" y="30" rx="4" ry="4" width="30" height="10" />
			<rect x="75" y="30" rx="4" ry="4" width="30" height="10" />

			<rect x="0" y="50" rx="4" ry="4" width="260" height="10" />

			<rect x="0" y="70" rx="0" ry="0" width="70" height="35" />
			<rect x="82" y="70" rx="0" ry="0" width="70" height="35" />
			<rect x="164" y="70" rx="0" ry="0" width="70" height="35" />
			<rect x="246" y="70" rx="0" ry="0" width="70" height="35" />
			<rect x="328" y="70" rx="0" ry="0" width="70" height="35" />
		</ContentLoader>
	</Loader>
);

export default BoardLoader;
