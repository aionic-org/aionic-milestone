import React, { Component } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'
import Error from 'components/UI/Error'

import BoardTaskFilter from '../filter'

class BoardTaskContainersFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
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
      return (
        <div className="BoardTaskContainersFilter">
          <Spinner />
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="BoardTaskContainersFilter">
          <Error message={msg} />
        </div>
      )
    } else {
      return <BoardTaskFilter userList={userList} statusList={statusList} {...this.props} />
    }
  }
}

export default BoardTaskContainersFilter
