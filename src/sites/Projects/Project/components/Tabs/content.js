import React from 'react'

import useTab from 'components/Utility/Hooks/useTab'

import Tabs from 'components/UI/Tabs'

import ProjectCommentsContainer from 'components/Project/Comments/container'

const SitesProjectTabsContent = props => {
  const { project } = props
  const [tab, changeTab] = useTab('')

  let content = null
  switch (tab) {
    case 'Comments':
      content = <ProjectCommentsContainer projectId={project.id} />
      break
    default:
      break
  }
  return (
    <div className="SitesProjectTabsContent">
      <div className="row">
        <div className="col-12 col-md-10">
          <Tabs handleClick={changeTab} tabs={['Comments']} />
          <div className="SitesProjectTabContent mt-3">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default SitesProjectTabsContent
