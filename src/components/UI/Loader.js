import React from 'react';

import { Spinner } from 'aionic-library';

import Title from './Title';

const Loader = (props) => {
	const { title, children } = props;

	return (
		<div>
			{title.length ? <Title title={title} /> : null}
			<div className="d-md-none">
				<Spinner />
			</div>
			<div className="d-none d-md-block">{children}</div>
		</div>
	);
};

Loader.defaultProps = {
	title: ''
};

export default Loader;
