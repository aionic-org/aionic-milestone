import React from 'react'

import './Commits.css'

import GitCommit from './Commit/'

const GitCommits = props => {
  const { commitList } = props

  return (
    <div className="GitCommits">
      {commitList.map((commit, i) => (
        <GitCommit key={i} commit={commit} />
      ))}
    </div>
  )
}

GitCommits.defaultProps = {
  commitList: []
}

export default GitCommits
