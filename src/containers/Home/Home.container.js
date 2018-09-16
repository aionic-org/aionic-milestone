import React, { Component } from 'react'

import './Home.container.css'

import { Dashboard } from '../../components/Dashboard/Dashboard'
import { Session } from '../../services/session'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="content container-fluid">
          <h1 className="h2">{`${Session.getUser().firstname}'s`} Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    )
  }
}
