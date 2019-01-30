import React from 'react'

import './Project.css'

import Content from 'components/UI/Content'
import CardDeck from 'components/UI/Deck'

import InputTitle from 'components/UI/Input/Title/'

const SitesProject = props => (
  <div className="SitesProject">
    <Content>
      <InputTitle defaultValue={props.project.title} placeholder={'Enter project title'} />
      <p className="text-muted font-weight-bold mt-4">
        Number of tasks: {props.project.tasks.length}
      </p>
      <CardDeck deckType={'task'} itemList={props.project.tasks} itemsPerRow={2} />
    </Content>
  </div>
)

export default SitesProject
