import React, { Component } from 'react'

import { Api } from 'services/api'
import Error from 'components/UI/Error'

class TaskCommentsForm extends Component {
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
      Api.postData(`task/${this.props.taskId}/comments`, { comment: this.state.comment })
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
      <div className="TaskCommentsForm">
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="form-control"
            name="comment"
            rows="3"
            onChange={this.handleInputChange}
          />

          <button className="btn btn-md btn-primary mt-2 btn-block btn-sm" type="submit">
            <i className="fas fa-sign-in-alt" /> Submit
          </button>
          {msg}
        </form>
      </div>
    )
  }
}

TaskCommentsForm.defaultProps = {
  updateParentState: () => {}
}

export default TaskCommentsForm
