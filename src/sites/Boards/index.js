import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Widget from 'components/Widget'

import CardDeck from 'components/Deck'

import SitesBoardOverview from './components/Overview'

const SitesBoards = props => {
  const { boards } = props

  return (
    <div className="SitesBoards">
      <Content>
        <Title title="Boards" />
        <div className="row">
          <div className="col-12 col-xl-8 order-last order-xl-first mt-3 mt-xl-0">
            <Widget title="All boards" icon="fas fa-chalkboard-teacher">
              <CardDeck deckType="Board" itemList={boards} itemsPerRow={3} />
            </Widget>
          </div>
          <div className="col-12 col-xl-4 order-first order-xl-last">
            <Widget title="Overview" icon="fas fa-chart-bar">
              <SitesBoardOverview boards={boards} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesBoards
