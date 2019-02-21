import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Widget from 'components/Widget'

import CardDeck from 'components/Deck'

import SitesProjectsOverview from './components/Overview'

const SitesProjects = props => {
  const { projects } = props

  return (
    <div className="SitesProjects">
      <Content>
        <Title title="Projects" />
        <div className="row">
          <div className="col-12 col-xl-8 order-last order-xl-first mt-3 mt-xl-0">
            <Widget title="All projects" icon="fas fa-project-diagram">
              <CardDeck deckType="Project" itemList={projects} itemsPerRow={3} />
            </Widget>
          </div>
          <div className="col-12 col-xl-4 order-first order-xl-last">
            <Widget title="Overview" icon="fas fa-chart-bar">
              <SitesProjectsOverview projects={projects} />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProjects
