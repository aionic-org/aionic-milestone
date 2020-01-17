import React from 'react';

import Content from '../../../../components/UI/Content';

import ContentLoader from 'react-content-loader';

const BoardLoader = () => (
	<Content>
		<ContentLoader height={115} width={400} speed={1} ariaLabel="Loading project...">
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
	</Content>
);

export default BoardLoader;
