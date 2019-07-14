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
        <h5 className="card-title">{announcement.description}</h5>

        <p className="card-text">
          <small className="text-muted">
            {announcement.author.firstname} {announcement.author.lastname} @{announcement.created}
          </small>
          <button className="btn btn-danger btn-sm float-right" onClick={deleteAnnouncement}>
            Remove
          </button>
        </p>
      </div>
    </div>
  )
}

export default AnnouncementPreview
