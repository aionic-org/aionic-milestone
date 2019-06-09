import React, { useState } from 'react'

import Fetcher from 'components/Utility/Fetcher'

import GitCommits from '.'

const GitCommitsContainer = props => (
  <Fetcher
    url={`git/${props.task.organization.id}/repository/${props.task.repository.id}/${
      props.task.branch
    }/commits`}
  >
    {commits => {
      /*      const [commitList, setCommitList] = useState(commits)

      const handleInputChange = e => {
        const value = e.target.value

        if (value.length) {
          const commitsFiltered = commits.filter(commit => {
            return commit.text === value
          })

          setCommitList(commitsFiltered)
        } else {
          setCommitList(commits)
        }
      }*/

      return (
        <div className="GitCommitsContainer">
          <input type="text" className="form-control" placeholder="Filter commits..." />
          <GitCommits commitList={commits} />
        </div>
      )
    }}
  </Fetcher>
)

export default GitCommitsContainer
