import React, { Component } from 'react'

import { Api } from '../../../services/api'

import ContainersTaskHOC from '../HOC'
import Error from '../../../components/UI/Error/'
import Spinner from '../../../components/UI/Spinner/'
import TaskForm from '../../../components/Task/Form/'
import TaskNotations from '../../../components/Task/Notations'

export default class ContainersTaskMain extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: true, msg: '', task: {} }
  }

  componentDidMount = () => {
    const task = Api.fetchData(`task/base/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          isLoading: false,
          task: res
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, msg: Api.handleHttpError(err) })
      })
  }

  updateStateTask = task => {
    this.setState({ task: task })
  }

  render() {
    const { isLoading, msg, task } = this.state

    if (isLoading) {
      return (
        <ContainersTaskHOC>
          <Spinner />
        </ContainersTaskHOC>
      )
    } else if (msg.length) {
      return (
        <ContainersTaskHOC>
          <Error message={msg} />
        </ContainersTaskHOC>
      )
    } else {
      return (
        <ContainersTaskHOC>
          <TaskForm task={task} updateStateTask={this.updateStateTask} />
          <div className="row">
            <div className="col-md-12 mt-4">
              <TaskNotations task={task} />
            </div>
          </div>
        </ContainersTaskHOC>
      )
    }
  }
}
