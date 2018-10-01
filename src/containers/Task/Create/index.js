import React, { Component } from 'react'

import { Session } from '../../../services/session'

import ContainersTaskHOC from '../HOC'
import TaskForm from '../../../components/Task/Form'

export default class ContainersTaskCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {}
    }
  }

  updateStateTask = task => {
    this.setState({ task: task })
  }

  render() {
    return (
      <ContainersTaskHOC>
        <TaskForm
          {...this.props}
          task={this.state.task}
          updateStateTask={this.updateStateTask}
          doLiveUpdate={false}
          isNewTask={true}
        />
      </ContainersTaskHOC>
    )
  }
}
