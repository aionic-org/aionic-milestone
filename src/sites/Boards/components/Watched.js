import React from 'react';

import { useFetcher } from 'aionic-library';

import Session from '../../../services/session';
import { WatchedItems } from '../../../services/constants';

import BoardPreview from '../../../components/Board/Preview';

const BoardsWatched = (props) => {
	const [data, isLoading, error, setData] = useFetcher('boards', {
		ids: Session.getWatchedItems(WatchedItems.BOARD).join(',')
	});

	const handleWatch = (boardIDs) => {
		setData(data.filter((board) => boardIDs.includes(board.id)));
	};

	return !isLoading && data.length && Session.getWatchedItems(WatchedItems.BOARD).length ? (
		<div className="BoardsWatched mb-3">
			<small>Watched</small>
			<div className="row">
				{data.map((board, i) => (
					<div className="col-12 col-md-4 mt-2" key={board.id}>
						<BoardPreview board={board} handleWatch={handleWatch} index={i} />
					</div>
				))}
			</div>
			<hr className="featurette-divider" />
		</div>
	) : null;
};

export default BoardsWatched;
