import React, { Component } from 'react'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import Card from 'components/Card'

export class AdministrationAnnouncement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: '',
      announcements: []
    }
  }

  render() {
    const { isLoading, msg, announcements } = this.state

    if (isLoading) {
      return <Spinner />
    } else if (msg.length) {
      return <Error message={msg} />
    } else {
      return (
        <div className="AdministrationAnnouncement">
          <Card title="Announcements" icon="fas fa-bullhorn">
            <p>Placeholder</p>
          </Card>
        </div>
      )
    }
  }
}

export default AdministrationAnnouncement
