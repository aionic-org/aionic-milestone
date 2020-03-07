import React from 'react';

import './Title.scss';

const InputTitle = (props) => {
	const { placeholder, defaultValue, onBlur, margin } = props;

	return (
		<div className="InputTitle">
			<input
				type="text"
				name="title"
				className={`h3 w-100 ${margin ? 'mb-4' : ''}`}
				placeholder={placeholder}
				autoComplete="off"
				defaultValue={defaultValue}
				onBlur={onBlur}
			/>
		</div>
	);
};

InputTitle.defaultProps = {
	placeholder: '',
	margin: false
};

export default InputTitle;
