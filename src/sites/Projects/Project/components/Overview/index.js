import React from 'react'

const SitesProjectOverview = props => {
  const { project, handleInputChange, handleBtnClick } = props

  const closedTasks = project.tasks.filter(task => task.closed).length
  const openTasks = project.tasks.length - closedTasks

  const finished = project.finished
  const progress = (closedTasks / project.tasks.length) * 100

  return (
    <div className="SitesProjectOverview">
      <p class="text-muted font-weight-bold">Overview</p>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Tasks
          <span class="badge badge-primary badge-pill">{project.tasks.length}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Open tasks
          <span class="badge badge-primary badge-pill">{openTasks}</span>
          Closed tasks
          <span class="badge badge-primary badge-pill">{closedTasks}</span>
        </li>
      </ul>
      <textarea
        name="description"
        className="form-control mt-2"
        rows="3"
        defaultValue={project.description}
        onBlur={handleInputChange}
      />

      <div class="progress mt-2">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      <small class="text-muted d-block text-right mt-3">Last update: {project.updated} </small>
      <button
        className={`btn btn-block mt-3 btn-${finished ? 'secondary' : 'primary'}`}
        onClick={handleBtnClick}
      >
        {finished ? 'Reopen' : 'Mark as finished'}
      </button>
    </div>
  )
}

export default SitesProjectOverview
