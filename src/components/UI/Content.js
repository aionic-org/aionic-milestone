import React from 'react';

const Content = (props) => (
	<div className="content" id="content" style={{ padding: '1.5rem .75rem 0rem' }}>
		{props.children}
	</div>
);

export default Content;
