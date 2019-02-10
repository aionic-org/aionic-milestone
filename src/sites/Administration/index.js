import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import AdministrationGeneral from './components/general'
import AdministrationUser from './components/user'

import Title from 'components/UI/Title'
import Content from 'components/UI/Content'

class SitesAdministration extends Component {
  render() {
    return (
      <div className="SitesAdministration">
        <Content>
          <Title title={'Administration'} />
          <div className="row">
            <div className="col-12 col-xl-3">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <NavLink exact to="/administration" className="nav-link" activeClassName="active">
                  General
                </NavLink>
                <NavLink to="/administration/user" className="nav-link" activeClassName="active">
                  Users
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-xl-9">
              <Switch>
                <Route exact path="/administration" component={AdministrationGeneral} />
                <Route path="/administration/user" component={AdministrationUser} />
              </Switch>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default SitesAdministration
