import moment from 'moment';

export default class Helper {
	static updateObjectPropByEvent(object, event, cb) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		if (object[name] !== value) {
			let newValue = null;

			// API can't handle booleans as strings
			if (value === 'true' || value === 'false') {
				newValue = JSON.parse(value);
			} else {
				newValue = value;
			}

			cb({ ...object, [name]: newValue });
		}
	}

	static formatDateTime(_date) {
		const date = _date ? moment(_date) : '';
		return date ? date.format('YYYY-MM-DD hh:mm a') : '-';
	}

	static formatDate(_date) {
		const date = _date ? moment(_date) : '';
		return date ? date.format('YYYY-MM-DD') : '-';
	}
}
