import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'

import CommentForm from 'components/Comments/Comment/Form'

class TaskCommentsFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: {}, isLoading: false, msg: '' }
  }

  handleInputChange = e => {
    const value = e.target.value

    this.setState({
      comment: {
        comment: value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.comment.comment && this.state.comment.comment.length) {
      Api.postData(`task/${this.props.taskId}/comment`, { comment: this.state.comment })
        .then(res => {
          this.props.updateParentState()
        })
        .catch(err => {
          this.setState({ msg: Api.handleHttpError(err) })
        })
    }
  }

  render() {
    const msg = this.state.msg ? (
      <Error message={this.state.msg} showIcon={false} assignedClasses={['mt-0']} />
    ) : null

    return (
      <div className="TaskCommentsFormContainer">
        <CommentForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
        {msg}
      </div>
    )
  }
}

TaskCommentsFormContainer.defaultProps = {
  updateParentState: () => {}
}

export default TaskCommentsFormContainer
