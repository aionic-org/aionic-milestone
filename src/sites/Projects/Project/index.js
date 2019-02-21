import React from 'react'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import Widget from 'components/Widget'

import CardDeck from 'components/Deck'

import SitesProjectDetails from './components/Details'
import SitesProjectTabsContent from './components/Tabs'

const SitesProject = props => {
  const { project, handleInputChange, toggleStatus, deleteProject, updateProjectTasks } = props

  return (
    <div className="SitesProject">
      <Content>
        <InputTitle
          defaultValue={project.title}
          placeholder={'Enter project title'}
          onBlur={handleInputChange}
        />
        <div className="row">
          <div className="col-12 col-xl-8 order-last order-xl-first mt-3 mt-xl-0">
            <Widget title="Tasks" icon="fas fa-clipboard-list">
              <CardDeck deckType="Task" itemList={project.tasks} itemsPerRow={3} />
            </Widget>

            <Widget title="More" icon="fas fa-ellipsis-h" showMargin={true}>
              <SitesProjectTabsContent project={project} />
            </Widget>
          </div>
          <div className="col-12 col-xl-4 order-first order-xl-last">
            <Widget title="Details" icon="fas fa-info-circle">
              <SitesProjectDetails
                project={project}
                handleInputChange={handleInputChange}
                toggleStatus={toggleStatus}
                deleteProject={deleteProject}
                updateProjectTasks={updateProjectTasks}
              />
            </Widget>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProject
