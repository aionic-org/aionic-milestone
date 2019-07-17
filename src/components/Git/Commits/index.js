import React from 'react'

import './Commits.scss'

import GitCommit from './Commit/'

const GitCommits = props => {
  const { commitList } = props

  return (
    <div className="GitCommits">
      <div className="list-group">
        {commitList.map((commit, i) => (
          <GitCommit key={i} commit={commit} />
        ))}
      </div>
    </div>
  )
}

GitCommits.defaultProps = {
  commitList: []
}

export default GitCommits
