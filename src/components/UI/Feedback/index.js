import React from 'react';

import './Feedback.scss';

const Feedback = (props) => {
	const { valid, message } = props;

	return (
		<div className="Feedback">
			<span className={`small ${valid ? 'status-valid' : 'status-invalid'}`}>{message}</span>
		</div>
	);
};

Feedback.defaultProps = {
	valid: true
};

export default Feedback;
