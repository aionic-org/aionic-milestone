import React from 'react'

import './List.scss'

const AnnouncementsList = props => {
  const { announcementList } = props

  const content = announcementList.length ? (
    announcementList.map((announcement, i) => (
      <li
        key={i}
        className={`list-group-item list-group-item-action ${
          announcement.important ? 'important' : ''
        }`}
      >
        <p className="mb-0">{announcement.description}</p>
        <small>
          {announcement.author.firstname} {announcement.author.lastname} @{announcement.created}
        </small>
      </li>
    ))
  ) : (
    <li className="list-group-item text-center font-italic">There are no announcements yet!</li>
  )

  return (
    <div className="AnnouncementsList">
      <ul className="list-group">{content}</ul>
    </div>
  )
}

AnnouncementsList.defaultProps = {
  announcementList: []
}

export default AnnouncementsList
