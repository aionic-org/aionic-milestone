import React, { Component } from 'react'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import Widget from 'components/Widget'

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
          <Widget title="Announcements" icon="fas fa-bullhorn">
            <p>Placeholder</p>
          </Widget>
        </div>
      )
    }
  }
}

export default AdministrationAnnouncement
