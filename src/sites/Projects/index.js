import React from 'react'

import './Projects.css'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'
import CardDeck from 'components/UI/Deck'

const SitesProjects = props => (
  <div className="SitesProjects">
    <Content>
      <Title title={'Projects'} />
      <CardDeck deckType={'project'} itemList={props.projects} itemsPerRow={2} />
    </Content>
  </div>
)

export default SitesProjects
