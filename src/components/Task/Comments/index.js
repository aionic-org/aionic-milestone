import React, { Component } from 'react'

import TaskComment from './Comment/'

class TaskComments extends Component {
  constructor(props) {
    super()

    this.state = {
      commentList: props.commentList
    }
  }

  removeComment = id => {
    const comments = this.state.commentList.filter(comment => {
      return comment.id != id
    })

    this.setState({
      commentList: comments
    })
  }

  render() {
    return (
      <div className="TaskComments">
        {this.state.commentList.map(comment => {
          return (
            <TaskComment
              key={comment.id}
              comment={comment}
              taskId={this.props.taskId}
              removeComment={this.removeComment}
            />
          )
        })}
      </div>
    )
  }
}

TaskComments.defaultProps = {
  commentList: []
}

export default TaskComments
