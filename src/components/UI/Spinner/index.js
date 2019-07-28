import React from 'react';

import './Spinner.scss';

const Spinner = (props) => {
	const { onBtn, showPadding } = props;

	return (
		<div className={`Spinner ${onBtn ? 'onBtn' : ''} ${showPadding ? 'showPadding' : ''}`}>
			<div className="bounce1" />
			<div className="bounce2" />
			<div className="bounce3" />
		</div>
	);
};

Spinner.defaultProps = {
	onBtn: false,
	showPadding: false
};

export default Spinner;
