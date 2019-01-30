import React from 'react'

import Alert from 'components/UI/Alert'
import InputTitle from 'components/UI/Input/Title'

import TaskDetailsContainer from 'components/Task/Details/container'

import Content from 'components/UI/Content'
import InputMarkdown from 'components/UI/Input/Markdown'

import SitesTaskTabs from './components/Tabs'

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
            <p className="text-muted font-italic mt-5">Description</p>
            <InputMarkdown
              content={task.description}
              name={'description'}
              onBlurCb={handleInputChange}
              rows={10}
            />
          </div>
        </div>
        {taskFooter}
      </Content>
    </div>
  )
}

export default SitesTask
