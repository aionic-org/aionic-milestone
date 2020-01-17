import React from 'react';

import Content from '../../../components/UI/Content';
import Title from '../../../components/UI/Title';

import ContentLoader from 'react-content-loader';

const BoardsLoader = () => (
	<Content>
		<Title title="Boards" />
		<ContentLoader height={65} width={400} speed={1} ariaLabel="Loading boards...">
			<rect x="0" y="0" rx="4" ry="4" width="165" height="10" />
			<rect x="185" y="0" rx="4" ry="4" width="65" height="10" />
			<rect x="260" y="0" rx="4" ry="4" width="65" height="10" />
			<rect x="335" y="0" rx="4" ry="4" width="65" height="10" />

			<rect x="0" y="15" rx="4" ry="4" width="400" height="50" />
		</ContentLoader>
	</Content>
);

export default BoardsLoader;
