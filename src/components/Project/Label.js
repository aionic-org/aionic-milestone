import React from 'react'

const ProjectLabel = props => {
  const { project } = props

  return project.done ? (
    <span className="ProjectLabel badge badge-primary float-right">Done</span>
  ) : null
}

export default ProjectLabel
