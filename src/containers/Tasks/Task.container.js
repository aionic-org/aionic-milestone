import React, { Component } from 'react'

import './Task.container.css'
import { TaskDetails } from '../../components/Tasks/Task/TaskDetails'
import { TaskNotations } from '../../components/Tasks/Task/TaskNotations'
import { TaskDescription } from '../../components/Tasks/Task/TaskDescription'
import { Api } from '../../services/api'
import { Spinner } from '../../components/Misc/Spinner'

export class TaskContainer extends Component {
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
    const task = Api.fetchData(`task/details/${this.props.match.params.id}`)
    const userList = Api.fetchData('user')
    const statusList = Api.fetchData('task/status')

    Promise.all([task, userList, statusList])
      .then(res => {
        this.setState({
          isLoading: false,
          task: res[0].data.data,
          userList: res[1].data.data,
          statusList: res[2].data.data
        })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            isLoading: false,
            msg: 'Task not found!'
          })
        } else {
          this.setState({
            isLoading: false,
            msg: 'Failed to fetch data from server!'
          })
        }
      })
  }

  render() {
    const { isLoading, msg, task, userList, statusList } = this.state

    if (isLoading) {
      return (
        <div className="TaskContainer">
          <div className="content container-fluid">
            <Spinner />
          </div>
        </div>
      )
    } else if (msg.length) {
      return (
        <div className="TaskContainer">
          <div className="content container-fluid">
            <p className="text-center text-danger mt-4">{msg}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="TaskContainer">
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
