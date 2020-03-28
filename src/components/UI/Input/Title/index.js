import React from 'react';

import './Title.scss';

const InputTitle = ({ placeholder, defaultValue, onBlur, completed }) => (
	<div className="InputTitle">
		<input
			type="text"
			name="title"
			className={`h3 w-100 mb-4 ${completed ? 'completed' : ''}`}
			placeholder={placeholder}
			autoComplete="off"
			defaultValue={defaultValue}
			onBlur={onBlur}
		/>
	</div>
);

InputTitle.defaultProps = {
	completed: false,
	placeholder: ''
};

export default InputTitle;
