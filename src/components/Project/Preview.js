import React from 'react'
import { Link } from 'react-router-dom'

import ProjectLabel from './Label'

const ProjectPreview = props => {
  const { project } = props

  return (
    <Link to={`/project/${project.id}`} className="ProjectPreview CardLink card">
      <div className="card-body">
        <h5 className="card-title">
          {project.title} ({project.tasks.length}) <ProjectLabel project={project} />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {project.author.firstname} {project.author.lastname}
        </h6>
        <p className="card-text">{project.description}</p>
        <p className="card-text">
          <small className="text-muted">Created: {project.created}</small>
        </p>
      </div>
    </Link>
  )
}

export default ProjectPreview
