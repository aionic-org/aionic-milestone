import React from 'react';

const Content = (props) => (
	<div className="content" id="content" style={{ padding: '1.25rem .5rem 0rem' }}>
		{props.children}
	</div>
);

export default Content;
