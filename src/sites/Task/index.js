import React from 'react'

import Content from 'components/UI/Content'
import Tabs from './components/Tabs'

import TaskTitle from 'components/Task/Title'
import TaskSummaryContainer from 'components/Task/Summary/container'
import TaskDescription from 'components/Task/Description'
import TaskActionButtons from '../../components/Task/ActionButtons'
import TaskTags from '../../components/Task/Tags'

const SitesTask = props => {
  const { task, isNewTask, handleInputChange, createTask, updateTask } = props

  return (
    <div className="SitesTask">
      <Content>
        <div className="row">
          <div className="col-12 col-md-7 col-xl-8">
            <TaskTitle task={task} onBlur={handleInputChange} />
          </div>
          <div className="col-12 col-md-5 offset-xl-1 col-xl-3 mt-3 mt-md-0">
            <TaskActionButtons task={task} updateTask={updateTask} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TaskTags task={task} updateTask={updateTask} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-xl-8">
            <TaskSummaryContainer
              handleInputChange={handleInputChange}
              updateTask={updateTask}
              task={task}
            />
            <TaskDescription task={task} updateTask={updateTask} />
          </div>
          <div className="col-12 col-xl-4 mt-3 mt-xl-0">
            <Tabs task={task} updateTask={updateTask} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
