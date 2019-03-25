import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import AnnouncementList from './List'

const AnnouncementContainer = props => (
  <Fetcher url="announcement">
    {announcements => {
      return (
        <div className="AnnouncementContainer">
          <AnnouncementList announcementList={announcements} />
        </div>
      )
    }}
  </Fetcher>
)

export default AnnouncementContainer
