import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.css'

import { Logo } from '../../Misc/Logo'
import { Searchbar } from '../../Search/Searchbar'

export const Navbar = props => {
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
          <NavLink to="/" className="navbar-brand font-weight-bold">
            <Logo assignedStyle={logoStyle} assignedClasses={logoClasses} />
            Aionic
          </NavLink>
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
              <li className="nav-item active">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Feed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search
                </a>
              </li>
            </ul>

            <Searchbar assignedClasses={searchbarClasses} />

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
                  <i class="fas fa-plus" />
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#">
                    Invite user
                  </a>
                  <a className="dropdown-item" href="#">
                    Create task
                  </a>
                  <a className="dropdown-item" href="#">
                    Create team
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://example.com"
                  id="dropdown07"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lars Wächter
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Account
                  </a>
                  <div class="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i class="fas fa-sign-out-alt" /> Signout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
