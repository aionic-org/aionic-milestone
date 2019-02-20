import React from 'react'

import InputTitle from 'components/UI/Input/Title'

import Card from 'components/Card'

import TaskDetailsContainer from 'components/Task/Details/container'

import Content from 'components/UI/Content'

import SitesTaskTabsContent from './components/Tabs/content'
import TaskDescription from 'components/Task/Description'

const SitesTask = props => {
  const { task, isNewTask, handleInputChange, createTask } = props

  const taskFooter = isNewTask ? (
    <button
      className="btn btn-primary btn-block mt-2"
      onClick={() => {
        createTask()
      }}
    >
      Create task
    </button>
  ) : (
    <Card title="More" icon="fas fa-ellipsis-h" showMargin={true}>
      <SitesTaskTabsContent task={task} />
    </Card>
  )

  return (
    <div className="SitesTask">
      <Content>
        <InputTitle
          defaultValue={task.title}
          onBlur={handleInputChange}
          showDivider={false}
          placeholder={'Enter task title'}
        />
        <div className="row">
          <div className="col-xl-10">
            <Card title="Details" icon="fas fa-info-circle">
              <TaskDetailsContainer handleInputChange={handleInputChange} task={task} />
            </Card>

            <Card title="Description" icon="fas fa-map" showMargin={true}>
              <TaskDescription task={task} handleInputChange={handleInputChange} />
            </Card>
            {taskFooter}
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
