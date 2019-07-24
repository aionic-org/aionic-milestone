import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';

import Session from 'services/session';

import SearchBar from 'components/Search/Bar';

const Navbar = (props) => {
  const { toggleSidebar } = props;

  const searchbarClasses = ['form-inline', 'mt-3', 'mt-md-0'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        type="button"
        className="btn btn-link mr-3"
        onClick={toggleSidebar}
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
        <SearchBar assignedClasses={searchbarClasses} />

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <button
              type="button"
              className="btn btn-link nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-plus mr-1" /> Create
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
              <div className="dropdown-header">Users & Boards</div>
              <NavLink to="/administration/user" className="dropdown-item">
                <i className="far fa-envelope fa-fw mr-2" />
                Invite user
              </NavLink>
              <NavLink exact to="/board?create=true" className="dropdown-item">
                <i className="fas fa-chalkboard-teacher mr-2" />
                Create board
              </NavLink>
              <div className="dropdown-divider" />

              <div className="dropdown-header">Tasks & Projects</div>

              <NavLink exact to="/task" className="dropdown-item">
                <i className="fas fa-tasks fa-fw mr-2" />
                Create task
              </NavLink>
              <NavLink to="/project?create=true" className="dropdown-item">
                <i className="fas fa-table fa-fw mr-2" />
                Create project
              </NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <button
              type="button"
              className="btn btn-link nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user-tie mr-1" /> {Session.getUser().firstname}
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
              <div className="dropdown-header">
                {`${Session.getUser().firstname} ${Session.getUser().lastname}`}
              </div>
              <NavLink to="/user/me" className="dropdown-item">
                <i className="far fa-user-circle fa-fw mr-2" />
                Account
              </NavLink>
              {Session.isAdmin() ? (
                <NavLink to="/administration" className="dropdown-item">
                  <i className="fas fa-wrench fa-fw mr-2" />
                  Administration
                </NavLink>
              ) : null}
              <div className="dropdown-divider" />
              <Link to="/signout" className="dropdown-item">
                <i className="fas fa-sign-out-alt fa-fw mr-2" /> Signout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
