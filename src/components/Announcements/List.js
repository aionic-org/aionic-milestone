import React from 'react'

const AnnouncementList = props => {
  const { announcementList } = props

  return (
    <div className="AnnouncementList">
      <ul className="list-group list-group-flush">
        {announcementList.map((announcement, i) => (
          <li key={i} className="list-group-item">
            <p className="mb-0">{announcement.description}</p>
            <small>
              {announcement.author.firstname} {announcement.author.lastname} @{announcement.created}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}

AnnouncementList.defaultProps = {
  announcementList: []
}

export default AnnouncementList
