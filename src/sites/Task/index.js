import React from 'react'

import Alert from 'components/UI/Alert'
import InputTitle from 'components/UI/Input/Title'

import TaskDetailsContainer from 'components/Task/Details/container'

import Content from 'components/UI/Content'

import SitesTaskTabs from './components/Tabs'
import TaskDescription from 'components/Task/Description'

const SitesTask = props => {
  const { task, taskUpdate, isNewTask, handleInputChange, createTask } = props

  const taskUpdateAlert = !taskUpdate.status.length ? null : (
    <Alert
      assignedClass={taskUpdate.status === 'Success' ? 'success' : 'danger'}
      title={taskUpdate.status}
      message={taskUpdate.msg}
    />
  )

  const taskFooter = isNewTask ? (
    <div className="row">
      <div className="col-xl-8">
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            createTask()
          }}
        >
          Create task
        </button>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-xl-8 mt-4">
        <SitesTaskTabs task={task} />
      </div>
    </div>
  )

  return (
    <div className="SitesTask">
      <Content>
        <div className="mb-2">
          <InputTitle
            defaultValue={task.title}
            onBlur={handleInputChange}
            placeholder={'Enter task title'}
          />
          <hr className="featurette-divider" />
        </div>
        <div className="row">
          <div className="col-xl-8">
            <TaskDetailsContainer handleInputChange={handleInputChange} task={task} />
          </div>
          <div className="col-xl-4">{taskUpdateAlert}</div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <TaskDescription task={task} handleInputChange={handleInputChange} />
          </div>
        </div>
        {taskFooter}
      </Content>
    </div>
  )
}

export default SitesTask
