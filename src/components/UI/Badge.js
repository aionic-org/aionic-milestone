import React from 'react';

const Badge = (props) => {
	const { title, assignedClasses } = props;

	return (
		<div className="Badge text-uppercase">
			<span className={`badge ${assignedClasses.join(' ')}`}>{title}</span>
		</div>
	);
};

Badge.defaultProps = {
	assignedClasses: []
};

export default Badge;
