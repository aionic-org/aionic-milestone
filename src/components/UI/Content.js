import React from 'react';

const Content = (props) => (
	<div className="content p-2 pt-4" id="content">
		{props.children}
	</div>
);

export default Content;
