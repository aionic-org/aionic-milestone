import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Sidebar.css'

import UILogo from 'components/UI/Logo'

const Sidebar = props => {
  const logoStyle = {
    height: '40px',
    width: '40px'
  }

  const logoClasses = ['d-inline-block', 'align-top']

  return (
    <div class="Sidebar border-right" id="sidebar-wrapper">
      <div class="sidebar-heading text-center">
        <UILogo assignedStyle={logoStyle} assignedClasses={logoClasses} />
      </div>
      <hr class="sidebar-divider" />

      <div class="list-group list-group-flush mt-4">
        <NavLink exact to="/" className="list-group-item list-group-item-action">
          <i class="fas fa-fw fa-tachometer-alt" />
          Dashboard
          <i class="fas fa-chevron-right float-right mt-1" />
        </NavLink>
        <hr class="sidebar-divider" />

        <NavLink exact to="/project" className="list-group-item list-group-item-action">
          <i class="fas fa-project-diagram" />
          Projects
          <i class="fas fa-chevron-right float-right mt-1" />
        </NavLink>
        <hr class="sidebar-divider" />

        <NavLink exact to="/teams" className="list-group-item list-group-item-action">
          <i class="fas fa-users" />
          Teams
          <i class="fas fa-chevron-right float-right mt-1" />
        </NavLink>
        <hr class="sidebar-divider" />

        <NavLink exact to="/search" className="list-group-item list-group-item-action">
          <i class="fas fa-search" />
          Search
          <i class="fas fa-chevron-right float-right mt-1" />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
