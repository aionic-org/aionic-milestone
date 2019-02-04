import React from 'react'

import './Projects.css'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'
import CardDeck from 'components/UI/Deck'

const SitesProjects = props => (
  <div className="SitesProjects">
    <Content>
      <Title title={'Projects'} />
      <div className="col-8">
        <CardDeck deckType={'project'} itemList={props.projects} itemsPerRow={2} />
      </div>
    </Content>
  </div>
)

export default SitesProjects
