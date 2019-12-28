import React from 'react';

import Content from '../../components/UI/Content';
import Title from '../../components/UI/Title';

import CardDeck from '../../components/Deck';

import BoardsFilters from './components/Filters';
import BoardsCreate from './components/Create';

const SitesBoards = (props) => {
	const { boards, filters, filterBoardsByParams, filterBoardsByText, resetFilters } = props;
	const { all, filtered } = boards;

	const boardsToShow = filters.text.length ? filtered : all;

	return (
		<div className="SitesBoards">
			<Content>
				<Title title="Boards" />
				<div className="row">
					<div className="col-12 col-xl">
						<BoardsFilters
							filters={filters}
							filterItemsByParams={filterBoardsByParams}
							filterItemsByText={filterBoardsByText}
							resetFilters={resetFilters}
						/>
					</div>
					<div className="col-12 col-xl-auto">
						<BoardsCreate />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<CardDeck deckType="board" itemList={boardsToShow} itemsPerRow={2} />
					</div>
				</div>
			</Content>
		</div>
	);
};

export default SitesBoards;
