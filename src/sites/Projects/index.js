import React from 'react'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import ProjectsWidgetbar from './components/Widgetbar'

import CardDeck from 'components/Deck'
import Filters from 'components/Filters/'

import ProjectCreate from './components/Create'

const SitesProjects = props => {
  const { projects, filters, filterProjectsByParams, filterProjectsByText, resetFilters } = props
  const { all, fetched, filtered } = projects

  const projectsToShow = filters.text.length ? filtered : fetched

  const orderByList = [
    { value: '', title: 'Order by' },
    { value: 'created', title: 'Created' },
    { value: 'finished', title: 'Finished' },
    { value: 'title', title: 'Title' },
    { value: 'updated', title: 'Updated' }
  ]

  return (
    <div className="SitesProjects">
      <Content>
        <Title title="Projects" />
        <ProjectsWidgetbar allProjects={projects.all} />
        <div className="row">
          <div className="col-12 col-xl-10">
            <Filters
              filters={filters}
              filterItemsByParams={filterProjectsByParams}
              filterItemsByText={filterProjectsByText}
              resetFilters={resetFilters}
              orderByList={orderByList}
            />
          </div>
          <div className="col-12 col-xl-2">
            <ProjectCreate />
          </div>
        </div>{' '}
        <div className="row">
          <div className="col-12">
            <CardDeck deckType="Project" itemList={projectsToShow} itemsPerRow={3} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProjects
