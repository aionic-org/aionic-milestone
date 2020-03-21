import React from 'react';

import Title from '../../components/UI/Title';

import CardDeck from '../../components/Deck';

import BoardsFilters from './components/Filters';
import BoardsCreate from './components/Create';
import BoardsWatched from './components/Watched';

const SitesBoards = (props) => {
	const { boards, filters, filterBoardsByParams, filterBoardsByText, resetFilters } = props;
	const { all, filtered } = boards;

	const boardsToShow = filters.text.length ? filtered : all;

	return (
		<div className="SitesBoards">
			<div className="row">
				<div className="col">
					<Title title="Boards" />
				</div>
				<div className="col-auto">
					<BoardsCreate />
				</div>
			</div>

			<BoardsWatched />

			<div className="row">
				<div className="col-12 col-xl">
					<BoardsFilters
						filters={filters}
						filterItemsByParams={filterBoardsByParams}
						filterItemsByText={filterBoardsByText}
						resetFilters={resetFilters}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<CardDeck deckType="board" itemList={boardsToShow} itemsPerRow={2} />
				</div>
			</div>
		</div>
	);
};

export default SitesBoards;
