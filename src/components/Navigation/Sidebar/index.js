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
    <div className="Sidebar" id="sidebar-wrapper">
      <div className="sidebar-heading text-center">
        <NavLink to="/">
          <UILogo assignedStyle={logoStyle} assignedClasses={logoClasses} />
        </NavLink>
      </div>
      <hr className="sidebar-divider" />

      <div className="list-group list-group-flush mt-4">
        <NavLink exact to="/" className="list-group-item list-group-item-action">
          <i className="fas fa-fw fa-home fa-fw" />
          Home
          <i className="fa fa-chevron-right float-right mt-1" />
        </NavLink>

        <hr className="sidebar-divider" />
        <NavLink exact to="/project" className="list-group-item list-group-item-action">
          <i className="fas fa-table fa-fw" />
          Projects
          <i className="fa fa-chevron-right float-right mt-1" />
        </NavLink>

        <hr className="sidebar-divider" />
        <NavLink exact to="/board" className="list-group-item list-group-item-action">
          <i className="fas fa-chalkboard-teacher" />
          Boards
          <i className="fa fa-chevron-right float-right mt-1" />
        </NavLink>

        <hr className="sidebar-divider" />
        <NavLink to="/search" className="list-group-item list-group-item-action">
          <i className="fas fa-search fa-fw" />
          Search
          <i className="fa fa-chevron-right float-right mt-1" />
        </NavLink>

        {Session.isAdmin() ? (
          <div>
            <hr className="sidebar-divider" />
            <NavLink to="/administration" className="list-group-item list-group-item-action">
              <i className="fas fa-wrench fa-fw" />
              Administration
              <i className="fa fa-chevron-right float-right mt-1" />
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Sidebar
