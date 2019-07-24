import React from 'react';

const GitCommit = (props) => {
  const { commit } = props;

  return (
    <a
      className="GitCommit CardLink list-group-item"
      href={commit.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{commit.author}</h5>
      </div>
      <p className="mb-1">{commit.message}</p>
      <small className="text-muted">SHA: {commit.sha}</small>
    </a>
  );
};

export default GitCommit;
