import React from 'react'

import InputTitle from 'components/UI/Input/Title'

import Widget from 'components/Widget'

import TaskDetailsContainer from 'components/Task/Details/container'

import Content from 'components/UI/Content'

import SitesTaskTabs from './components/Tabs/'
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
    <Widget title="More" icon="fas fa-ellipsis-h" showMargin={true}>
      <SitesTaskTabs task={task} />
    </Widget>
  )

  return (
    <div className="SitesTask">
      <Content>
        <InputTitle
          defaultValue={task.title}
          onBlur={handleInputChange}
          placeholder={'Enter task title'}
        />
        <div className="row">
          <div className="col-xl-10">
            <Widget title="Details" icon="fas fa-info-circle">
              <TaskDetailsContainer handleInputChange={handleInputChange} task={task} />
            </Widget>

            <Widget title="Description" icon="fas fa-map" showMargin={true}>
              <TaskDescription task={task} handleInputChange={handleInputChange} />
            </Widget>
            {taskFooter}
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
