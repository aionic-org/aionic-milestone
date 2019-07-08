import React from 'react'

import ProjectWidgetbar from './components/Widgetbar'
import SitesProjectTabs from './components/Tabs'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import CardDeck from 'components/Deck'

import ProjectOptionButtons from 'components/Project/OptionButtons'

const SitesProject = props => {
  const { project, updateParentProjectState, deleteProject } = props

  const handleTitleChange = e => {
    if (e.target.value !== project.title) {
      updateParentProjectState({ ...project, title: e.target.value })
    }
  }

  return (
    <div className="SitesProject">
      <Content>
        <div className="row">
          <div className="col-12 col-md-7 col-xl-8">
            <InputTitle
              defaultValue={project.title}
              placeholder={'Enter project title'}
              onBlur={handleTitleChange}
            />
          </div>
          <div className="col-12 col-md-5 col-xl-4">
            <ProjectOptionButtons
              project={project}
              updateParentProjectState={updateParentProjectState}
            />
          </div>
        </div>
        <ProjectWidgetbar project={project} />
        <div className="row">
          <div className="col-12 col-xl-8">
            <CardDeck deckType="Task" itemList={project.tasks} itemsPerRow={3} />
          </div>
          <div className="col-12 col-xl-4 mt-3 mt-xl-0">
            <SitesProjectTabs
              project={project}
              updateParentProjectState={updateParentProjectState}
            />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProject
