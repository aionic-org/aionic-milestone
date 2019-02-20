import React from 'react'

const AnnouncementList = props => {
  const { announcementList } = props

  return (
    <div className="AnnouncementList">
      <ul className="list-group list-group-flush">
        {announcementList.map((announcement, i) => (
          <li key={i} className="list-group-item">
            Cras justo odio
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnnouncementList
