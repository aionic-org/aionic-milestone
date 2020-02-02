import React from 'react';

import { Spinner } from 'aionic-library';

import Content from './Content';
import Title from './Title';

const Loader = (props) => {
	const { title, wrapContent, children } = props;

	const content = (
		<div>
			{title.length ? <Title title={title} /> : null}
			<div className="d-md-none">
				<Spinner />
			</div>
			<div className="d-none d-md-block">{children}</div>
		</div>
	);

	return wrapContent ? <Content>{content}</Content> : content;
};

Loader.defaultProps = {
	wrapContent: true,
	title: ''
};

export default Loader;
