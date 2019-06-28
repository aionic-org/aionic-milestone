import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

import { Session } from 'services/session'

import UILogo from 'components/UI/Logo'

const Sidebar = props => {
  const logoStyle = {
    height: '50px',
    width: '50px'
  }

  const logoClasses = ['d-inline-block', 'align-top']

  return (
    <div className="Sidebar">
      <div className="sidebar-heading text-center">
        <NavLink to="/">
          <UILogo assignedStyle={logoStyle} assignedClasses={logoClasses} />
        </NavLink>
      </div>
      <div className="list-group list-group-flush">
        <NavLink exact to="/" className="list-group-item list-group-item-action">
          <i className="fas fa-home fa-fw mr-2" /> Home
        </NavLink>

        <NavLink exact to="/feed" className="list-group-item list-group-item-action">
          <i className="fas fa-newspaper fa-fw mr-2" /> Feed
        </NavLink>

        <NavLink exact to="/project" className="list-group-item list-group-item-action">
          <i className="fas fa-table fa-fw mr-2" /> Projects
        </NavLink>

        <NavLink exact to="/board" className="list-group-item list-group-item-action">
          <i className="fas fa-chalkboard-teacher fa-fw mr-2" /> Boards
        </NavLink>

        <NavLink to="/search" className="list-group-item list-group-item-action">
          <i className="fas fa-search fa-fw mr-2" /> Search
        </NavLink>

        {Session.isAdmin() ? (
          <div>
            <hr className="sidebar-divider" />
            <NavLink to="/administration" className="list-group-item list-group-item-action">
              <i className="fas fa-wrench fa-fw mr-2" /> Admin
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Sidebar
