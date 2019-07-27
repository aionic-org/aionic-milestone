import React from 'react';

const Badge = (props) => {
	const { title, assignedClasses, large } = props;

	const badge = <span className={`badge ${assignedClasses.join(' ')}`}>{title}</span>;

	return (
		<div className="Badge text-uppercase">{large ? <h6 className="mb-0">{badge}</h6> : badge}</div>
	);
};

Badge.defaultProps = {
	assignedClasses: [],
	large: false
};

export default Badge;
