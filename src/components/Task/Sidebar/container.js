import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskSidebar from '.'

class TaskSidebarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      userList: []
    }
  }

  componentDidMount = () => {
    Api.fetchData('users')
      .then(users => {
        this.setState({
          isLoading: false,
          userList: users
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, userList } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="TaskSidebarContainer">
          <TaskSidebar userList={userList} {...this.props} />
        </div>
      )
    }
  }
}

export default TaskSidebarContainer
