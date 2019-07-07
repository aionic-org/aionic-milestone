import React from 'react'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import CardDeck from 'components/Deck'

import ProjectWidgetbar from './components/Widgetbar'
import ProjectOptionButtons from 'components/Project/OptionButtons'
import SitesProjectTabs from './components/Tabs'

const SitesProject = props => {
  const { project, handleInputChange, deleteProject, updateProject } = props

  const updateProjectTasks = tasks => {
    updateProject({ ...project, tasks })
  }

  return (
    <div className="SitesProject">
      <Content>
        <div className="row">
          <div className="col-12 col-md-7 col-xl-8">
            <InputTitle
              defaultValue={project.title}
              placeholder={'Enter project title'}
              onBlur={handleInputChange}
            />
          </div>
          <div className="col-12 col-md-5 col-xl-4">
            <ProjectOptionButtons project={project} updateProject={updateProject} />
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
              handleInputChange={handleInputChange}
              updateProjectTasks={updateProjectTasks}
            />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProject
