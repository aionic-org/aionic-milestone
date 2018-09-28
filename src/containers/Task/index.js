import React, { Component } from 'react'

import './Task.css'

import { Api } from '../../services/api'

import { Spinner } from '../../components/UI/Spinner/'
import { Error } from '../../components/UI/Error/'
import { TaskDetails } from '../../components/Task/Details'
import { TaskNotations } from '../../components/Task/Notations'
import { TaskDescription } from '../../components/Task/Description'

export class ContainersTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      msg: '',
      task: {},
      userList: [],
      statusList: []
    }
  }

  componentDidMount = () => {
    const task = Api.fetchData(`task/base/${this.props.match.params.id}`)
    const userList = Api.fetchData('user')
    const statusList = Api.fetchData('task/status')

    Promise.all([task, userList, statusList])
      .then(res => {
        this.setState({
          isLoading: false,
          task: res[0],
          userList: res[1],
          statusList: res[2]
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  render() {
    const { isLoading, msg, task, userList, statusList } = this.state

    if (isLoading) {
      return (
        <div className="ContainersTask">
          <div className="content container-fluid">
            <Spinner />
          </div>
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="ContainersTask">
          <div className="content container-fluid">
            <Error message={msg} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="ContainersTask">
          <div className="content container-fluid">
            <div className="mb-2">
              <h1 className="h2">{task.title}</h1>
              <hr className="featurette-divider" />
            </div>
            <div className="row">
              <div className="col-xl-8">
                <TaskDetails task={task} userList={userList} statusList={statusList} />
                <TaskDescription task={task} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-4">
                <TaskNotations task={task} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
