import React, { Component } from 'react'

import './Home.css'

import { Session } from '../../services/session'

import BoardUser from '../../components/Board/User/'

export default class ContainersHome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ContainersHome">
        <div className="content container-fluid">
          <BoardUser user={Session.getUser()} />
        </div>
      </div>
    )
  }
}
