import React from 'react'

import Content from 'components/UI/Content'
import SitesTaskTabs from './components/Tabs'

import TaskTitle from 'components/Task/Title'
import TaskTags from 'components/Task/Tags'
import TaskSummaryContainer from 'components/Task/Summary/container'
import TaskDescription from 'components/Task/Description'
import TaskOptionButtons from 'components/Task/OptionButtons'

const SitesTask = props => {
  const { task, isNewTask, handleInputChange, createTask, updateTask } = props

  return (
    <div className="SitesTask">
      <Content>
        <div className="row">
          <div className="col-12 col-md-7 col-xl-8">
            <TaskTitle task={task} onBlur={handleInputChange} />
          </div>
          <div className="col-12 col-md-5 col-xl-4 mt-4 mt-md-0">
            <TaskOptionButtons task={task} updateTask={updateTask} />
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
            <SitesTaskTabs task={task} updateTask={updateTask} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
