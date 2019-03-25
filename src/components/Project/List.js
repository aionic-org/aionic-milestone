import React from 'react'
import InputSelect from 'components/UI/Input/Select'

const ProjectList = props => {
  const projects = props.projectList.map(project => {
    return { ...project, optionTitle: project.title }
  })

  return (
    <div className="ProjectList">
      <InputSelect
        optionList={projects}
        name="project"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

ProjectList.defaultProps = {
  projectList: [],
  onChange: () => {},
  defaultValue: ''
}

export default ProjectList
