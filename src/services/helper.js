import { Helper as GlobalHelper, Session } from 'aionic-library';

export default class Helper extends GlobalHelper {
	static swapArrayElements(array, elem1, elem2) {
		const arr = array.slice();

		const tmp = arr[elem1];
		arr[elem1] = arr[elem2];
		arr[elem2] = tmp;

		return arr;
	}

	static getTaskStatus() {
		return Session.getConfig().taskStatus;
	}

	static getTaskPriorities() {
		return Session.getConfig().taskPriorities;
	}
}
