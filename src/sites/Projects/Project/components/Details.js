import React from 'react'

import Progress from 'components/UI/Progress'

import TaskSuggestion from 'components/Task/Suggestion'
import ProjectLabel from 'components/Project/Label'

const SitesProjectDetails = props => {
  const { project, handleInputChange, toggleStatus, deleteProject, updateProjectTasks } = props

  const closedTasks = project.tasks.filter(task => task.closed).length
  const openTasks = project.tasks.length - closedTasks

  const done = project.done
  const progress = (closedTasks / project.tasks.length) * 100

  return (
    <div className="SitesProjectDetails">
      <p className="text-muted font-weight-bold">
        Overview
        <ProjectLabel project={project} />
      </p>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tasks
          <span className="badge badge-secondary badge-pill">{project.tasks.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Open
          <span className="badge badge-secondary badge-pill">{openTasks}</span>
          Closed
          <span className="badge badge-secondary badge-pill">{closedTasks}</span>
        </li>
      </ul>

      <p className="text-muted font-weight-bold mt-4">Progress</p>
      <Progress progress={progress} />

      <p className="text-muted font-weight-bold mt-4">Description</p>
      <textarea
        name="description"
        className="form-control mt-2"
        rows="3"
        defaultValue={project.description}
        onBlur={handleInputChange}
      />

      <p className="text-muted font-weight-bold mt-4">Tasks</p>
      <TaskSuggestion taskListSelected={project.tasks} updateParent={updateProjectTasks} />
      <small className="text-muted d-block text-right mt-3">Updated: {project.updated} </small>

      <button
        className={`btn btn-block mt-3 btn-${done ? 'secondary' : 'primary'}`}
        onClick={toggleStatus}
      >
        {done ? 'Open' : 'Mark as done'}
      </button>
      <button className="btn btn-block btn-danger" onClick={deleteProject}>
        Delete
      </button>
    </div>
  )
}

export default SitesProjectDetails
