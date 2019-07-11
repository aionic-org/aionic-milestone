import React from 'react'

import { Helper } from 'services/helper'

import useTextFilter from 'components/Utility/Hooks/useTextFilter'

import ProjectWidgetbar from './components/Widgetbar'
import SitesProjectTabs from './components/Tabs'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import CardDeck from 'components/Deck'

import ProjectOptionButtons from 'components/Project/OptionButtons'

const SitesProject = props => {
  const { project, updateParentProjectState, deleteProject } = props
  const [tasksFiltered, setTasksFiltered, filterText] = useTextFilter('title', project.tasks)

  const handleTitleChange = e => {
    Helper.updateObjectPropByEvent(project, e, updateParentProjectState)
  }

  const filterTasks = e => {
    setTasksFiltered(e.target.value)
  }

  const tasksToShow = filterText.length ? tasksFiltered : project.tasks

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
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Filter tasks..."
                onChange={filterTasks}
              />
            </div>
            <CardDeck deckType="Task" itemList={tasksToShow} itemsPerRow={3} />
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
