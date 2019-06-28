import React from 'react'

import useTab from 'components/Utility/Hooks/useTab'

import Navs from 'components/UI/Navs'

import ProjectCommentsContainer from 'components/Project/Comments/container'
import ProjectDescription from 'components/Project/Description'

const SitesProjectTabs = props => {
  const { project, handleInputChange } = props
  const [tab, changeTab] = useTab('Description')

  const tabs = [{ name: 'Description' }, { name: 'Tasks' }, { name: 'Comments' }]

  let content = <p className="text-muted text-center font-italic mt-2">No tab selected</p>
  switch (tab) {
    case 'Description':
      content = <ProjectDescription project={project} handleInputChange={handleInputChange} />
      break
    case 'Tasks':
      content = null
      break
    case 'Comments':
      content = <ProjectCommentsContainer projectId={project.id} />
      break
    default:
      break
  }

  return (
    <div className="SitesProjectTabs">
      <Navs handleClick={changeTab} tabs={tabs} preselectTabIdx={0} />
      <div className={`SitesProjectTabs ${content ? 'mt-3' : ''}`}>{content}</div>
    </div>
  )
}

export default SitesProjectTabs
