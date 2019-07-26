import React from 'react';

import './Error.scss';

const Error = (props) => {
	const icon = props.showIcon ? (
		<i className="fas fa-exclamation-triangle d-block text-center" />
	) : null;

	return (
		<div className={`Error ${props.assignedClasses.join(' ')}`}>
			{icon}
			<p className="text-center text-danger mt-2 mb-0">{props.message}</p>
		</div>
	);
};

Error.defaultProps = {
	assignedClasses: [],
	showIcon: true
};

export default Error;
