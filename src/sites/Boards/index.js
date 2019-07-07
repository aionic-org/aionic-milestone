import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import CardDeck from 'components/Deck'
import Filters from 'components/Filters/'
import BoardsCreate from './components/Create'

const SitesBoards = props => {
  const { boards, filters, filterBoardsByParams, filterBoardsByText, resetFilters } = props
  const { all, filtered } = boards

  const boardsToShow = filters.text.length ? filtered : all

  const orderByList = [
    { value: '', title: 'Order by' },
    { value: 'created', title: 'Created' },
    { value: 'title', title: 'Title' },
    { value: 'updated', title: 'Updated' }
  ]

  return (
    <div className="SitesBoards">
      <Content>
        <Title title="Boards" />
        <div className="row">
          <div className="col-12 col-xl-10">
            <Filters
              filters={filters}
              filterItemsByParams={filterBoardsByParams}
              filterItemsByText={filterBoardsByText}
              resetFilters={resetFilters}
              orderByList={orderByList}
            />
          </div>
          <div className="col-12 col-xl-2">
            <BoardsCreate />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CardDeck deckType="Board" itemList={boardsToShow} itemsPerRow={2} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesBoards
