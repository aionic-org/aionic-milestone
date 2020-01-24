import { Helper as GlobalHelper, Session } from 'aionic-library';

export default class Helper extends GlobalHelper {
	static getTaskStatus() {
		return Session.getConfig().taskStatus;
	}

	static getTaskPriorities() {
		return Session.getConfig().taskPriorities;
	}
}
