import React from 'react';

const InputSelect = (props) => (
	<select
		name={props.name}
		className={`InputSelect form-control ${props.classes.join(' ')}`}
		defaultValue={props.defaultValue}
		onChange={props.onChange}
		disabled={props.disabled}
		required={props.required}
	>
		{props.showDefault ? <option value="">-</option> : null}
		{props.optionList.map((option, i) => (
			<option value={option.value} key={option.id || i}>
				{option.title}
			</option>
		))}
	</select>
);

InputSelect.defaultProps = {
	classes: [],
	showDefault: true,
	disabled: false,
	required: false
};

export default InputSelect;
