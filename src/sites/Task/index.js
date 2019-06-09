import React from 'react'

import Content from 'components/UI/Content'
import Tabs from './components/Tabs'

import TaskTitle from 'components/Task/Title'
import TaskSummaryContainer from 'components/Task/Summary/container'
import TaskDescription from 'components/Task/Description'

const SitesTask = props => {
  const { task, isNewTask, handleInputChange, createTask, updateTask } = props

  return (
    <div className="SitesTask">
      <Content>
        <div className="row">
          <div className="col-8">
            <TaskTitle task={task} onBlur={handleInputChange} />
          </div>
          <div className="offset-1 col-3">
            <div className="float-right">
              <div className="btn-group ">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-share fa-fw mr-2" /> Share
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-print fa-fw mr-2" /> Print
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-archive fa-fw mr-2" /> Archive
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item text-danger" href="#">
                    <i className="fas fa-trash fa-fw mr-2" /> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-8">
            <TaskSummaryContainer
              handleInputChange={handleInputChange}
              updateTask={updateTask}
              task={task}
            />
            <TaskDescription task={task} updateTask={updateTask} />
          </div>
          <div className="col-4">
            <Tabs task={task} updateTask={updateTask} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesTask
