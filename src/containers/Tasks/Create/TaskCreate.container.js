import React, { Component } from 'react'

import './TaskCreate.container.css'

export class TaskCreateContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="TaskCreateContainer">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h2">Create task</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
