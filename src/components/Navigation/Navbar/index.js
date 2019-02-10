import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

import { Session } from 'services/session'

import UILogo from 'components/UI/Logo'

import SearchForm from 'components/Search/Form'

class Navbar extends Component {
  render() {
    const logoStyle = {
      height: '30px',
      width: '30px',
      marginRight: '8px'
    }

    const logoClasses = ['d-inline-block', 'align-top']
    const searchbarClasses = ['form-inline', 'my-2', 'my-md-0', 'mx-auto']

    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand font-weight-bold">
              <UILogo assignedStyle={logoStyle} assignedClasses={logoClasses} />
              Aionic
            </Link>
            <a className="navbar-brand font-weight-bold" href="#" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/project" className="nav-link" activeClassName="active">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/search" className="nav-link" activeClassName="active">
                    Search
                  </NavLink>
                </li>
              </ul>

              <SearchForm assignedClasses={searchbarClasses} />

              <ul className="navbar-nav mr-auto">
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
                    <a className="dropdown-item" href="#">
                      Create team
                    </a>
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
                    {`${Session.getUser().firstname} ${Session.getUser().lastname}`}
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="#">
                      Account
                    </a>
                    <NavLink to="/administration" className="dropdown-item">
                      Administration
                    </NavLink>
                    <div className="dropdown-divider" />
                    <Link to="/signout" className="dropdown-item">
                      <i className="fas fa-sign-out-alt" /> Signout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
