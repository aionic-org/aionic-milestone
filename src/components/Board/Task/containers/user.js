import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error/'
import Spinner from 'components/UI/Spinner/'
import Title from 'components/UI/Title'

import BoardTasks from '../'
import { Session } from '../../../../services/session'

class BoardTaskUser extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false, msg: '', tasks: [] }
  }

  componentDidMount = () => {
    this.fetchTasks()
  }

  updateParent = () => {
    this.fetchTasks()
  }

  fetchTasks = () => {
    this.setState({
      isLoading: true
    })

    Api.fetchData(`user/${this.props.user.id}/tasks/`)
      .then(tasks => {
        this.setState({ isLoading: false, tasks })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  render() {
    const { isLoading, msg, tasks } = this.state
    const { user, showTitle } = this.props

    if (isLoading) {
      return (
        <div className="BoardTaskUser">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardTaskUser">
          <Error message={msg} />
        </div>
      )
    } else {
      const title = showTitle ? (
        <Title title={`${user.firstname}'s Board`} showDivider={false} />
      ) : null

      return (
        <div className="BoardTaskUser">
          <BoardTasks
            taskList={tasks}
            handleStatusChange={this.handleStatusChange}
            title={title}
            updateParent={this.updateParent}
          />
        </div>
      )
    }
  }
}

BoardTaskUser.defaultProps = {
  user: Session.getUser(),
  showTitle: true
}

export default BoardTaskUser
