import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'
import Toast from 'components/UI/Toast'

import SitesBoard from '.'

class SitesBoardContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      board: {},
      boardUpdate: {
        success: null,
        msg: null
      }
    }
  }

  componentDidMount = () => {
    const boardId = this.props.match.params.id

    // Fetch board
    Api.fetchData(`boards/${boardId}`)
      .then(board => {
        if (board) {
          this.setState({ isLoading: false, board })
        } else {
          this.setState({ isLoading: false, msg: 'Resource not found!' })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (this.state.board[name] !== value) {
      const board = { ...this.state.board, [name]: value }

      this.setState({ board }, () => {
        this.updateBoard()
      })
    }
  }

  updateBoard = _board => {
    const board = _board || this.state.board

    Api.putData(`boards/${board.id}`, { board })
      .then(board => {
        // window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          board,
          boardUpdate: {
            success: true,
            msg: 'Board successfully updated!'
          }
        })
        setTimeout(() => {
          this.setState({
            boardUpdate: {
              success: null,
              msg: null
            }
          })
        }, 2000)
      })
      .catch(err => {
        this.setState({
          boardUpdate: {
            success: false,
            msg: 'Failed to update board!'
          }
        })
      })
  }

  deleteBoard = () => {
    Api.deleteData(`boards/${this.state.board.id}`)
      .then(() => {
        this.props.history.push('/board')
      })
      .catch(err => {
        this.setState({
          boardUpdate: {
            success: false,
            msg: 'Failed to delete board!'
          }
        })
      })
  }

  updateBoardUsers = users => {
    this.updateBoard({ ...this.state.board, users })
  }

  render() {
    const { isLoading, msg, board, boardUpdate } = this.state

    const alert = boardUpdate.msg ? (
      <Toast msg={boardUpdate.msg} success={boardUpdate.success} />
    ) : null

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="SitesBoardContainer">
          {alert}
          <SitesBoard
            board={board}
            handleInputChange={this.handleInputChange}
            updateBoardUsers={this.updateBoardUsers}
            deleteBoard={this.deleteBoard}
          />
        </div>
      )
    }
  }
}

export default withRouter(SitesBoardContainer)
