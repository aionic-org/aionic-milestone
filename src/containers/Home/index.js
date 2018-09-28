import React, { Component } from 'react'

import './Home.css'

import { Session } from '../../services/session'

import { BoardViewUser } from '../../components/Board/View/User/'

export class ContainersHome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ContainersHome">
        <div className="content container-fluid">
          <BoardViewUser user={Session.getUser()} />
        </div>
      </div>
    )
  }
}
