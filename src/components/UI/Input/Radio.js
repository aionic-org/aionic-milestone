import React from 'react';

const InputRadio = (props) => (
	<div className="InputRadio form-check form-check-inline">
		<input
			type="radio"
			name="priority"
			className="form-check-input"
			value={props.value}
			defaultChecked={props.defaultChecked === props.value ? 'checked' : ''}
			onChange={props.onChange}
		/>
		<label className="form-check-label">{props.title}</label>
	</div>
);

export default InputRadio;
