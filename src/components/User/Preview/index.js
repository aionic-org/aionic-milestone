import React from 'react'
import { Link } from 'react-router-dom'

const UserPreview = props => {
  return (
    <Link to={`/user/${props.user.id}`} className="UserPreview CardLink card">
      <div className="card-body">
        <h5 className="card-title">
          {props.user.firstname} {props.user.lastname}
        </h5>
        <p className="card-text">- Placeholder Biography -</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">ID: {props.user.id}</li>
        <li className="list-group-item">Email: {props.user.email}</li>
        <li className="list-group-item">Role: {props.user.userRole.name}</li>
        <li className="list-group-item">Status: {props.user.active.toString()}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Disable
        </a>
        <a href="#" className="card-link">
          Remove
        </a>
      </div>
    </Link>
  )
}

export default UserPreview
