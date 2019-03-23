import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import GitCommits from '.'

const GitCommitsContainer = props => (
  <Fetcher
    url={`git/${props.task.organization.id}/repository/${props.task.repository.id}/${
      props.task.branch
    }/commits`}
  >
    {commits => {
      return (
        <div className="GitCommitsContainer">
          <GitCommits commitList={commits} />
        </div>
      )
    }}
  </Fetcher>
)

export default GitCommitsContainer
