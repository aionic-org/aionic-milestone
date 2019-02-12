import React, { Component } from 'react'

import { Api } from 'services/api'
import { Session } from 'services/session'

import Error from 'components/UI/Error/'
import Spinner from 'components/UI/Spinner/'
import Title from 'components/UI/Title'

import BoardTasks from '../'

class BoardTaskContainerUser extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: false, msg: '', tasks: [] }
  }

  componentDidMount = () => {
    this.fetchTasks()
  }

  fetchTasks = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
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
    )
  }

  render() {
    const { isLoading, msg, tasks } = this.state
    const { user, showTitle } = this.props

    if (isLoading) {
      return <Spinner />
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      const title = showTitle ? (
        <Title title={`${user.firstname}'s Board`} showDivider={false} />
      ) : null

      return (
        <div className="BoardTaskContainerUser">
          <BoardTasks taskList={tasks} title={title} updateParent={this.fetchTasks} />
        </div>
      )
    }
  }
}

BoardTaskContainerUser.defaultProps = {
  user: Session.getUser(),
  showTitle: true
}

export default BoardTaskContainerUser
