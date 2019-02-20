import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import TaskFilter from '.'

class TaskFilterContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: null,
      userList: [],
      statusList: []
    }
  }

  componentDidMount = () => {
    const requests = [Api.fetchData('user/'), Api.fetchData('taskStatus/')]

    Promise.all(requests)
      .then(res => {
        this.setState({
          isLoading: false,
          userList: res[0],
          statusList: res[1]
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, userList, statusList } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg) {
      return <Error message={msg} />
    } else {
      return (
        <div className="TaskFilterContainer">
          <TaskFilter userList={userList} statusList={statusList} {...this.props} />
        </div>
      )
    }
  }
}

export default TaskFilterContainer
