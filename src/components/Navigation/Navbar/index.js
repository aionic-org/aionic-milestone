import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

import { Session } from 'services/session'

import SearchForm from 'components/Search/Form'

const Navbar = props => {
  const logoStyle = {
    height: '30px',
    width: '30px',
    marginRight: '8px'
  }

  const searchbarClasses = ['form-inline', 'mt-3', 'mt-md-0']

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <button
        className="btn btn-link mr-3"
        onClick={props.toggleSidebar}
        style={{ color: '#858796' }}
      >
        <i className="fa fa-bars" />
      </button>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <SearchForm assignedClasses={searchbarClasses} />

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="https://example.com"
              id="dropdown07"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-plus" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
              <NavLink to="/administration/user" className="dropdown-item">
                Invite user
              </NavLink>
              <NavLink exact to="/task" className="dropdown-item">
                Create task
              </NavLink>
              <NavLink to="/project?createProject=true" className="dropdown-item">
                Create project
              </NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user-tie" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
              <div className="dropdown-header">
                {`${Session.getUser().firstname} ${Session.getUser().lastname}`}
              </div>
              <NavLink to="/user/me" className="dropdown-item">
                Account
              </NavLink>
              {Session.isAdmin() ? (
                <NavLink to="/administration" className="dropdown-item">
                  Administration
                </NavLink>
              ) : null}
              <div className="dropdown-divider" />
              <Link to="/signout" className="dropdown-item">
                <i className="fas fa-sign-out-alt" /> Signout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
