import React from 'react'

import './Project.css'

import Content from 'components/UI/Content'
import InputTitle from 'components/UI/Input/Title/'

import Card from 'components/Card'

import CardDeck from 'components/Deck'

import SitesProjectOverview from './components/Overview'
import SitesProjectTabsContent from './components/Tabs/content'

const SitesProject = props => {
  const { project, handleInputChange, toggleStatus, deleteProject, updateProjectTasks } = props

  return (
    <div className="SitesProject">
      <Content>
        <InputTitle
          defaultValue={project.title}
          placeholder={'Enter project title'}
          showDivider={false}
          onBlur={handleInputChange}
        />
        <div className="row">
          <div className="col-12 col-xl-8 order-last order-xl-first mt-4 mt-xl-0">
            <Card title="Tasks" icon="fas fa-clipboard-list">
              <CardDeck deckType={'task'} itemList={project.tasks} itemsPerRow={3} />
            </Card>

            <Card title="More" icon="fas fa-ellipsis-h" doMargin={true}>
              <SitesProjectTabsContent project={project} />
            </Card>
          </div>
          <div className="col-12 col-xl-4 order-first order-xl-last">
            <Card title="Details" icon="fas fa-info-circle">
              <SitesProjectOverview
                project={project}
                handleInputChange={handleInputChange}
                toggleStatus={toggleStatus}
                deleteProject={deleteProject}
                updateProjectTasks={updateProjectTasks}
              />
            </Card>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesProject
