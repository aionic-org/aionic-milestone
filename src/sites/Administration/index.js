import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Title from 'components/UI/Title'
import Content from 'components/UI/Content'

import Card from 'components/Card'

import AdministrationGeneral from './components/general'
import AdministrationUser from './components/user'
import AdministrationGitHub from './components/github'

const SitesAdministration = props => {
  return (
    <div className="SitesAdministration">
      <Content>
        <Title title={'Administration'} />
        <div className="row">
          <div className="col-12 col-xl-4">
            <Card title="Category" wrapBody={false} icon="fas fa-sliders-h">
              <div className="nav nav-pills p-2" role="tablist" aria-orientation="vertical">
                <NavLink exact to="/administration" className="nav-link" activeClassName="active">
                  General
                </NavLink>
                <NavLink to="/administration/user" className="nav-link" activeClassName="active">
                  Users
                </NavLink>
                <NavLink to="/administration/github" className="nav-link" activeClassName="active">
                  GitHub
                </NavLink>
              </div>
            </Card>
          </div>
          <div className="col-12 col-xl-12 mt-3">
            <Switch>
              <Route exact path="/administration" component={AdministrationGeneral} />
              <Route path="/administration/user" component={AdministrationUser} />
              <Route path="/administration/github" component={AdministrationGitHub} />
            </Switch>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesAdministration
