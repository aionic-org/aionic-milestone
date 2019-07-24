import React from 'react';

import Api from 'services/api';
import Helper from 'services/helper';

const AnnouncementsTable = (props) => {
  const { announcements, removeParentAnnouncement } = props;

  const removeAnnouncement = (announcementToRemove) => {
    const announcement = announcements.find(
      (_announcement) => _announcement.id === announcementToRemove.id
    );

    if (announcement) {
      Api.deleteData(`announcements/${announcement.id}`).then(() => {
        removeParentAnnouncement(announcement.id);
      });
    }
  };

  return (
    <div className="AnnouncementsTable">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
              <th scope="col">Important</th>
              <th scope="col">Created</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement.id}>
                <th scope="row">{announcement.id}</th>
                <td>{`${announcement.author.firstname} ${announcement.author.lastname}`}</td>
                <td>{announcement.description}</td>
                <td>{String(announcement.important)}</td>
                <td>{Helper.formatDateTime(announcement.created)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={() => {
                      removeAnnouncement(announcement);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementsTable;
