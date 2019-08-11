import React from 'react';

const Badge = (props) => {
	const { title, info, assignedClasses } = props;

	return (
		<div className="Badge text-uppercase">
			<span className={`badge ${assignedClasses.join(' ')}`} title={info}>
				{title}
			</span>
		</div>
	);
};

Badge.defaultProps = {
	info: '',
	assignedClasses: []
};

export default Badge;
