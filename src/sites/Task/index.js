import React from 'react'

import { Session } from 'services/session'

import InputTitle from 'components/UI/Input/Title'

import Widget from 'components/Widget'

import TaskDetails from 'components/Task/Details/'

import Content from 'components/UI/Content'

import SitesTaskTabs from './components/Tabs'
import TaskDescription from 'components/Task/Description'
import TaskScratchpad from 'components/Task/Scratchpad'

const SitesTask = props => {
  const { task, isNewTask, handleInputChange, createTask, updateTask } = props

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
    <div className="row">
      <div className="col-8">
        <Widget title="More" icon="fas fa-ellipsis-h" showMargin={true}>
          <SitesTaskTabs task={task} />
        </Widget>
      </div>
      <div className="col-4">
        <Widget
          title="My Scratchpad"
          icon="fas fa-sticky-note"
          showMargin={true}
          showLastUpdate={false}
        >
          <TaskScratchpad task={task} user={Session.getUser()} />
        </Widget>
      </div>
    </div>
  )

  return (
    <div className="SitesTask">
      <Content>
        <div className="row">
          <div className="col-12">
            <InputTitle
              defaultValue={task.title}
              onBlur={handleInputChange}
              placeholder={'Enter task title'}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Widget title="Details" icon="fas fa-info-circle">
              <TaskDetails
                handleInputChange={handleInputChange}
                updateTask={updateTask}
                task={task}
              />
            </Widget>

            <Widget title="Description" icon="fas fa-map" showMargin={true}>
              <TaskDescription task={task} updateTask={updateTask} />
            </Widget>
          </div>
        </div>
        {taskFooter}
      </Content>
    </div>
  )
}

export default SitesTask
