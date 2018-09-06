import React, { Component } from 'react'

import './Task.container.css'
import { TaskDetails } from '../../components/Tasks/Task/TaskDetails'
import { TaskNotations } from '../../components/Tasks/Task/TaskNotations'
import { TaskDescription } from '../../components/Tasks/Task/TaskDescription'

export class TaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {}
    }
  }

  componentDidMount = () => {
    const taskID = this.props.match.params.id

    console.log(taskID)
  }

  render() {
    return (
      <div className="TaskContainer">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12 mb-2">
              <h1 className="h2">Fix user Login</h1>
              <hr className="featurette-divider" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <TaskDetails taskID={1} />
              <TaskDescription taskID={1} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-4">
              <TaskNotations taskID={1} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
