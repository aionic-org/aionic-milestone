import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import SettingsGeneral from './components/general'
import SettingsUsers from './components/users'

class ContainersSettings extends Component {
  render() {
    return (
      <div className="ContainersSettings">
        <div className="content container-fluid">
          <h1 className="h2">Settings</h1>
          <div className="row mt-4">
            <div className="col-3">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <NavLink exact to="/settings" className="nav-link" activeClassName="active">
                  General
                </NavLink>
                <NavLink to="/settings/users" className="nav-link" activeClassName="active">
                  Users
                </NavLink>
              </div>
            </div>
            <div className="col-9">
              <Switch>
                <Route exact path="/settings" component={SettingsGeneral} />
                <Route path="/settings/users" component={SettingsUsers} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContainersSettings
