import React from 'react';
import { Link } from 'react-router-dom';

const BoardPreview = (props) => {
  const { board } = props;

  return (
    <Link to={`/board/${board.id}`} className="BoardPreview CardLink card">
      <div className="card-header font-weight-bold">
        <span>
          {board.title} ({board.users.length})
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {board.author.firstname} {board.author.lastname}
        </h5>
        <p className="card-text">{board.description}</p>
      </div>
      <div className="card-footer text-muted">
        <small>Updated: {board.updated} </small>
      </div>
    </Link>
  );
};

export default BoardPreview;
