import React, { Component } from 'react'

import { Api } from 'services/api'

import Error from 'components/UI/Error'
import Spinner from 'components/UI/Spinner'

import Widget from 'components/Widget'

import Deck from 'components/Deck'

import AnnouncementForm from 'components/Announcements/Announcement/Form'

export class AdministrationAnnouncement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      msg: '',
      announcements: []
    }
  }

  componentDidMount = () => {
    Api.fetchData('announcements')
      .then(announcements => {
        this.setState({ isLoading: false, announcements })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          msg: Api.handleHttpError(err)
        })
      })
  }

  addAnnouncement = announcement => {
    const announcements = this.state.announcements.slice()
    announcements.push(announcement)

    this.setState({ announcements })
  }

  removeAnnouncement = announcement => {
    const announcementIdx = this.state.announcements.findIndex(org => org.id === announcement.id)

    if (announcementIdx >= 0) {
      const announcements = this.state.announcements.slice()
      announcements.splice(announcementIdx, 1)
      this.setState({ announcements })
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
          <Widget title="Announcements" icon="fas fa-bullhorn" wrapBody={true}>
            <AnnouncementForm updateParent={this.addAnnouncement} />
            <div className="GitOrganizationContainer">
              <Deck
                itemList={announcements}
                deckType="Announcement"
                itemsPerRow="1"
                handleDelete={this.removeAnnouncement}
              />
            </div>
          </Widget>
        </div>
      )
    }
  }
}

export default AdministrationAnnouncement
