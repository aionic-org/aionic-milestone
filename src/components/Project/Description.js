import React from 'react'

const ProjectDescription = props => {
  const { project, handleInputChange } = props

  return (
    <div className="ProjectDescription">
      <div className="form-group mb-0">
        <textarea
          className="form-control"
          name="description"
          rows="3"
          defaultValue={project.description}
          onBlur={handleInputChange}
        />
      </div>
    </div>
  )
}

export default ProjectDescription
