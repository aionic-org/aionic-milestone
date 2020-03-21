import { Session as GlobalSession } from 'aionic-library';

export default class Session extends GlobalSession {
	static getTaskStatus() {
		return Session.getConfig().taskStatus;
	}

	static getWatchedItems(itemType) {
		return JSON.parse(localStorage.getItem(itemType) || '[]');
	}

	static setWatchedItems(itemType, items) {
		localStorage.setItem(itemType, JSON.stringify(items));
	}

	static addWatchedItem(itemType, itemID) {
		const items = Session.getWatchedItems(itemType);
		if (!items.includes(itemID)) {
			items.push(itemID);
			Session.setWatchedItems(itemType, items);
		}

		return items;
	}

	static removeWatchedItem(itemType, itemID) {
		const items = Session.getWatchedItems(itemType).filter((id) => id !== itemID);
		Session.setWatchedItems(itemType, items);

		return items;
	}

	static getTaskPriorities() {
		return Session.getConfig().taskPriorities;
	}
}
