import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Session } from 'services/session'

import Navbar from 'components/Navigation/Navbar/'
import Sidebar from '../components/Navigation/Sidebar'
import Footer from 'components/Navigation/Footer/'

import SitesSignin from './Auth/Signin/'
import SitesRegister from './Auth/Register/'

import SitesHome from './Home/'
import SitesTaskContainer from './Task/container'
import SitesSearch from './Search'
import SitesAdministration from './Administration'
import SitesProjectsContainer from './Projects/container'
import SitesProjectContainer from './Projects/Project/container'
import SitesBoardsContainer from './Boards/container'
import SitesBoardContainer from './Boards/Board/container'
import SitesUserContainer from './User/container'

import NotFound from './NotFound'

const Routes = props => {
  const AuthContainer = () => (
    <div className="authentication">
      <Route path="/signin" component={SitesSignin} />
      <Route path="/register/:hash" component={SitesRegister} />
    </div>
  )

  const DefaultContainer = () => (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar toggleSidebar={props.toggleSidebar} />

        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={SitesHome} />
            <Route
              path="/signout"
              render={() => {
                Session.clearUser()
                return <Redirect to="/signin" />
              }}
            />
            <Route exact path="/task" component={SitesTaskContainer} />
            <Route path="/task/:id" component={SitesTaskContainer} />
            <Route exact path="/search" component={SitesSearch} />
            <Route path="/search/:searchTerm" component={SitesSearch} />
            <Route path="/administration" component={SitesAdministration} />
            <Route exact path="/project" component={SitesProjectsContainer} />
            <Route exact path="/project/:id" component={SitesProjectContainer} />
            <Route exact path="/board" component={SitesBoardsContainer} />
            <Route exact path="/board/:id" component={SitesBoardContainer} />
            <Route exact path="/user/:id" component={SitesUserContainer} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  )

  return (
    <Switch>
      <Route path="(/signin|/register.*)" component={AuthContainer} />
      <Route
        render={props => (Session.isLoggedIn() ? <DefaultContainer /> : <Redirect to="/signin" />)}
      />
    </Switch>
  )
}

export default Routes
