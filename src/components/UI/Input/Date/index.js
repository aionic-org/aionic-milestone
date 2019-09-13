import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './Date.scss';

const InputDate = (props) => {
	const { startDate, name, updateParent } = props;

	const [date, setDate] = useState(startDate);

	const handleChange = (newDate) => {
		setDate(newDate);
		updateParent(newDate);
	};

	return (
		<div className="InputDate">
			<DatePicker
				className="form-control"
				selected={new Date(date)}
				onChange={handleChange}
				dateFormat="yyyy-MM-dd hh:mm a"
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={60}
				name={name}
			/>
		</div>
	);
};

InputDate.defaultProps = {
	startDate: new Date()
};

export default InputDate;
