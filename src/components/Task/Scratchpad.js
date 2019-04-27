import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'

class TaskScratchpad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      status: null,
      scratchpad: {
        author: this.props.user,
        task: this.props.task
      }
    }
  }

  componentDidMount = () => {
    Api.fetchData(`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`)
      .then(scratchpad => {
        if (scratchpad) {
          this.setState({ isLoading: false, scratchpad })
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err),
          status: 'is-invalid'
        })
      })
  }

  handleInputChange = e => {
    const value = e.target.value

    if (this.state.scratchpad.text !== value) {
      const scratchpad = { ...this.state.scratchpad, text: value }

      this.setState({ scratchpad }, () => {
        Api.postData(`tasks/${this.props.task.id}/scratchpads/users/${this.props.user.id}`, {
          scratchpad
        })
          .then(_scratchpad => {
            this.setState({
              scratchpad: _scratchpad,
              status: 'is-valid'
            })
            setTimeout(() => {
              this.setState({
                status: null
              })
            }, 2000)
          })
          .catch(err => {
            this.setState({
              msg: Api.handleHttpError(err),
              status: 'is-invalid'
            })
          })
      })
    }
  }

  render() {
    const { isLoading, msg, scratchpad, status } = this.state

    if (isLoading) {
      return <Spinner />
    } else {
      return (
        <div className="UserStatus">
          <div className="form-group mb-0">
            <textarea
              className={`form-control ${status}`}
              name="status"
              rows="3"
              defaultValue={scratchpad.text}
              onBlur={this.handleInputChange}
            />
            <div className="valid-feedback">Scratchpad updated!</div>
            <div className="invalid-feedback">{msg}</div>
          </div>
        </div>
      )
    }
  }
}

export default TaskScratchpad
