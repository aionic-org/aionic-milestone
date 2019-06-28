import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import CardDeck from 'components/Deck'

import ProjectsActionbar from './components/Actionbar'
import ProjectsWidgetbar from './components/Widgetbar'

const SitesProjects = props => {
  const { projects, allProjects, updateSearchParams, filterByText } = props

  return (
    <div className="SitesProjects">
      <Content>
        <Title title="Projects" />
        <ProjectsWidgetbar allProjects={allProjects} />
        <ProjectsActionbar updateSearchParams={updateSearchParams} filterByText={filterByText} />
        <div className="row">
          <div className="col-12">
            <p className="d-inline-block text-muted font-weight-bold mt-3">
              Number of projects: {projects.length}
            </p>
            <CardDeck deckType="Project" itemList={projects} itemsPerRow={3} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProjects
