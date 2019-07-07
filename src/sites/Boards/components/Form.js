import React, { Component } from 'react'

import { withRouter } from 'react-router'

import { Api } from 'services/api'
import { Session } from 'services/session'

import Error from 'components/UI/Error'

import UserSuggestion from 'components/User/Suggestion'

class BoardsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: '',
      board: {
        author: Session.getUser()
      }
    }
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.board[name] !== value) {
      const board = { ...this.state.board, [name]: value }

      this.setState({ board })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.createBoard()
  }

  updateProjectTasks = users => {
    const board = { ...this.state.board, users }
    this.setState({ board })
  }

  createBoard = () => {
    const board = this.state.board

    Api.postData(`boards`, { board })
      .then(res => {
        this.props.history.push(`/board/${res.id}`)
      })
      .catch(err => {
        this.setState({ msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { msg } = this.state

    if (msg.length) {
      return (
        <div className="BoardsForm">
          <Error message={msg} />
        </div>
      )
    }

    return (
      <div className="BoardsForm">
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter title"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={this.handleInputChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Users</label>
            <UserSuggestion updateParent={this.updateProjectTasks} />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Create
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(BoardsForm)
