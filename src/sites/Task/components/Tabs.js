import React from 'react'

import useTab from 'components/Utility/Hooks/useTab'

import Tabs from 'components/UI/Tabs'

import TaskCommentsContainer from 'components/Task/Comments/container'
import TaskProjectsContainer from 'components/Task/Projects/container'
import GitCommitsContainer from 'components/Git/Commits/container'

const SitesTaskTabs = props => {
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
    case 'Commits':
      content = <GitCommitsContainer task={task} />
    default:
      break
  }

  return (
    <div className="SitesTaskTabs">
      <div className="row">
        <div className="col-12 col-md-10">
          <Tabs handleClick={changeTab} tabs={['Comments', 'Commits', 'Projects']} />
          <div className={`SitesTaskTabContent ${content ? 'mt-3' : ''}`}>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default SitesTaskTabs
