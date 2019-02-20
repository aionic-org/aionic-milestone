import React from 'react'

import Alert from 'components/UI/Alert'
import InputTitle from 'components/UI/Input/Title'

import Card from 'components/Card'

import TaskDetailsContainer from 'components/Task/Details/container'

import Content from 'components/UI/Content'

import SitesTaskTabsContent from './components/Tabs/content'
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
    <button
      className="btn btn-primary btn-block mt-2"
      onClick={() => {
        createTask()
      }}
    >
      Create task
    </button>
  ) : (
    <Card title="More" doMargin={true}>
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
            <Card title="Details">
              <TaskDetailsContainer handleInputChange={handleInputChange} task={task} />
            </Card>

            <Card title="Description" doMargin={true}>
              <TaskDescription task={task} handleInputChange={handleInputChange} />
            </Card>
            {taskFooter}
          </div>
          <div className="col-xl-2">{taskUpdateAlert}</div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
