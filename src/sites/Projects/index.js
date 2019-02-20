import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Card from 'components/Card'

import CardDeck from 'components/Deck'

import SitesProjectsOverview from './components/Overview'

const SitesProjects = props => {
  const { projects } = props

  return (
    <div className="SitesProjects">
      <Content>
        <Title title="Projects" />
        <div className="row">
          <div className="col-12 col-xl-8 order-last order-xl-first mt-4 mt-xl-0">
            <Card title="All projects" icon="fas fa-project-diagram">
              <CardDeck deckType={'project'} itemList={projects} itemsPerRow={3} />
            </Card>
          </div>
          <div className="col-12 col-xl-4 order-first order-xl-last">
            <Card title="Overview" icon="fas fa-chart-bar">
              <SitesProjectsOverview projects={projects} />
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProjects
