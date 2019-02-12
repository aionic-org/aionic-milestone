import React from 'react'

import useTab from 'components/Utility/Hooks/useTab'

import Tabs from 'components/UI/Tabs'

import TaskCommentsContainer from 'components/Task/Comments/container'
import TaskProjectsContainer from 'components/Task/Projects/container'

const SitesTaskTabsContent = props => {
  const { task } = props
  const [tab, changeTab] = useTab('')

  let content = null
  switch (tab) {
    case 'Comments':
      content = <TaskCommentsContainer taskId={task.id} />
      break
    case 'Projects':
      content = <TaskProjectsContainer taskId={task.id} />
      break
    default:
      break
  }

  return (
    <div className="SitesTaskTabsContent">
      <div className="row">
        <div className="col-12 col-md-10">
          <Tabs handleClick={changeTab} tabs={['Comments', 'Commits', 'Projects']} />
          <div className="SitesTaskTabContent mt-3">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default SitesTaskTabsContent
