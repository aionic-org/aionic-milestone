import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import { useFetcher } from 'aionic-library';

import Session from '../../../services/session';
import Helper from '../../../services/helper';

import { WatchedItems } from '../../../services/constants';

import PreviewDragable from '../../../components/Utility/PreviewDragable';
import BoardPreview from '../../../components/Board/Preview';

const BoardsWatched = (props) => {
	const watchedItems = Session.getWatchedItems(WatchedItems.BOARD);
	const [data, isLoading, error, setData] = useFetcher(
		'boards',
		{
			ids: watchedItems.join(',')
		},
		(boardA, boardB) => (watchedItems.indexOf(boardA.id) < watchedItems.indexOf(boardB.id) ? -1 : 1)
	);

	const handleWatch = (boardIDs) => {
		setData(data.filter((board) => boardIDs.includes(board.id)));
	};

	const moveItem = (dragIndex, hoverIndex) => {
		setData(Helper.swapArrayElements(data, dragIndex, hoverIndex));
		Session.setWatchedItems(
			WatchedItems.BOARD,
			Helper.swapArrayElements(Session.getWatchedItems(WatchedItems.BOARD), dragIndex, hoverIndex)
		);
	};

	return !isLoading && data.length && Session.getWatchedItems(WatchedItems.BOARD).length ? (
		<div className="BoardsWatched mb-3">
			<small>Watched</small>
			<div className="row">
				<DndProvider backend={Backend}>
					{data.map((board, i) => (
						<div className="col-12 col-md-4 mt-2" key={board.id}>
							<PreviewDragable
								item={board}
								itemType={WatchedItems.BOARD}
								moveItem={moveItem}
								index={i}
							>
								{(ref, style) => {
									return (
										<BoardPreview
											board={board}
											_ref={ref}
											_style={style}
											handleWatch={handleWatch}
										/>
									);
								}}
							</PreviewDragable>
						</div>
					))}
				</DndProvider>
			</div>
			<hr className="featurette-divider" />
		</div>
	) : null;
};

export default BoardsWatched;
