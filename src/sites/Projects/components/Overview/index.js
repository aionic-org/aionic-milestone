import React from 'react'

const SitesProjectsOverview = props => {
  const { projects } = props

  const finishedProjects = projects.filter(project => project.finished).length
  const openProjects = projects.length - finishedProjects

  return (
    <div className="SitesProjectsOverview">
      <p class="text-muted font-weight-bold">Overview</p>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
          Projects
          <span class="badge badge-primary badge-pill">{projects.length}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Open projects
          <span class="badge badge-primary badge-pill">{openProjects}</span>
          Finished projects
          <span class="badge badge-primary badge-pill">{finishedProjects}</span>
        </li>
      </ul>
    </div>
  )
}

export default SitesProjectsOverview
