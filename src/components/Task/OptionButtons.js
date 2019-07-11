import React from 'react'
import { withRouter } from 'react-router-dom'

import { Api } from 'services/api'

const TaskOptionButtons = props => {
  const { task, isNewTask, updateTask, history } = props

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed })
  }

  const createTask = () => {
    Api.postData('tasks', { task })
      .then(res => {
        props.history.push(`/task/${res.id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  let statusBtn = null
  let moreBtn = null
  if (isNewTask) {
    statusBtn = (
      <button type="button" className="btn btn-primary" onClick={createTask}>
        <i className="fas fa-plus mr-2" />
        Create and save
      </button>
    )
  } else {
    statusBtn = task.completed ? (
      <button type="button" className="btn btn-warning" onClick={toggleComplete}>
        <i className="fas fa-redo mr-2" /> Reopen
      </button>
    ) : (
      <button type="button" className="btn btn-secondary" onClick={toggleComplete}>
        <i className="fas fa-check mr-2" />
        Mark complete
      </button>
    )
    moreBtn = (
      <div className="btn-group ml-2">
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
    )
  }

  return (
    <div className="TaskOptionButtons">
      <div className="float-md-right">
        {statusBtn}
        {moreBtn}
      </div>
    </div>
  )
}

TaskOptionButtons.defaultProps = {
  assignedClasses: []
}

export default withRouter(TaskOptionButtons)
