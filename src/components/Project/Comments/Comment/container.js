import React from 'react';

import Api from 'services/api';

import Comment from 'components/Comments/Comment/';

const ProjectCommentContainer = (props) => {
  const { comment, projectId, removeComment } = props;

  const deleteComment = (id) => {
    Api.deleteData(`projects/${projectId}/comments/${id}`)
      .then(() => {
        removeComment(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ProjectCommentContainer">
      <Comment comment={comment} deleteComment={deleteComment} />
    </div>
  );
};

export default ProjectCommentContainer;
