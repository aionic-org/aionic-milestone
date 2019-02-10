import React from 'react'

const UserDetails = props => {
  const { user } = props

  return (
    <div className="UserDetails">
      <p className="text-muted font-italic">Details</p>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Firstname</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Firstname"
            defaultValue={user.firstname}
          />
        </div>
        <label className="col-sm-2 col-form-label">Lastname</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Lastname"
            defaultValue={user.lastname}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            defaultValue={user.email}
          />
        </div>
        <label className="col-sm-2 col-form-label">Role</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            defaultValue={user.userRole.name}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">ID</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            defaultValue={user.id}
            disabled
          />
        </div>
        <label className="col-sm-2 col-form-label">Active</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Active"
            defaultValue={user.active}
          />
        </div>
      </div>
    </div>
  )
}

export default UserDetails
