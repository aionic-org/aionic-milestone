import React from 'react'

import Progress from 'components/UI/Progress'

import TaskSuggestion from 'components/Task/Suggestion'
import ProjectLabel from '../../../../../components/Project/Label'

const SitesProjectOverview = props => {
  const { project, handleInputChange, toggleStatus, deleteProject, updateProjectTasks } = props

  const closedTasks = project.tasks.filter(task => task.closed).length
  const openTasks = project.tasks.length - closedTasks

  const done = project.done
  const progress = (closedTasks / project.tasks.length) * 100

  return (
    <div className="SitesProjectOverview">
      <p className="text-muted font-weight-bold">
        Overview
        <ProjectLabel project={project} />
      </p>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tasks
          <span className="badge badge-primary badge-pill">{project.tasks.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Open tasks
          <span className="badge badge-primary badge-pill">{openTasks}</span>
          Closed tasks
          <span className="badge badge-primary badge-pill">{closedTasks}</span>
        </li>
      </ul>
      <textarea
        name="description"
        className="form-control mt-2"
        rows="3"
        defaultValue={project.description}
        onBlur={handleInputChange}
      />
      <Progress progress={progress} />
      <div className="mt-3">
        <TaskSuggestion taskListSelected={project.tasks} updateParentState={updateProjectTasks} />
      </div>
      <small className="text-muted d-block text-right mt-3">Last update: {project.updated} </small>
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

export default SitesProjectOverview
