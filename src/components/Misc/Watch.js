import React, { useState } from 'react';

import Session from '../../services/session';

const MiscWatch = (props) => {
	const { item, itemType, handleWatch } = props;
	const watchedItems = Session.getWatchedItems(itemType);

	const [isItemWatched, setIsItemWatched] = useState(watchedItems.includes(item.id));

	const toggleWatch = () => {
		if (isItemWatched) {
			const items = Session.removeWatchedItem(itemType, item.id);
			setIsItemWatched(false);
			handleWatch(items);
		} else {
			const items = Session.addWatchedItem(itemType, item.id);
			setIsItemWatched(true);
			handleWatch(items);
		}
	};

	return (
		<div className="MiscWatch">
			{isItemWatched ? (
				<button type="button" className="btn dropdown-item" onClick={toggleWatch}>
					<i className="far fa-heart fa-fw mr-1" /> Unwatch
				</button>
			) : (
				<button type="button" className="btn dropdown-item" onClick={toggleWatch}>
					<i className="fas fa-heart fa-fw mr-1" /> Watch
				</button>
			)}
		</div>
	);
};

MiscWatch.defaultProps = {
	handleWatch: () => {}
};

export default MiscWatch;
