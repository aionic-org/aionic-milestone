import React from 'react'

import { Api } from 'services/api'

const AnnouncementPreview = props => {
  const { announcement, handleDelete } = props

  const deleteAnnouncement = () => {
    Api.deleteData(`announcements/${announcement.id}`)
      .then(res => {
        handleDelete(announcement)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="AnnouncementPreview card">
      <div className="card-body">
        <h5 className="card-title">
          {announcement.author.firstname} {announcement.author.lastname}
        </h5>
        <p className="card-text">{announcement.description}</p>
        <p className="card-text">
          <small className="text-muted">{announcement.created}</small>
        </p>

        <button className="btn btn-danger" onClick={deleteAnnouncement}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default AnnouncementPreview
