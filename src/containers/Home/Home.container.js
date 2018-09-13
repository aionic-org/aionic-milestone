import React, { Component } from 'react'

import './Home.container.css'

import { Dashboard } from '../../components/Dashboard/Dashboard'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h2">John's Dashboard</h1>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
