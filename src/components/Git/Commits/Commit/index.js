import React from 'react'

const GitCommit = props => {
  const { commit } = props

  return (
    <div className="GitCommit">
      <a className="CardLink card" href={commit.url} target="_blank">
        <div className="card-body">
          <h5 className="card-title">{commit.message}</h5>
          <p className="card-text">{commit.author}</p>
          <p className="card-text">
            <small className="text-muted">SHA: {commit.sha}</small>
          </p>
        </div>
      </a>
    </div>
  )
}

export default GitCommit
