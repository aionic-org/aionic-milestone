import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Session } from 'services/session'

import Navbar from 'components/Navigation/Navbar/'
import Footer from 'components/Navigation/Footer/'

import SitesSignin from './Auth/Signin/'
import SitesRegister from './Auth/Register/'
import SitesHome from './Home/'
import SitesTask from './Task/container'
import SitesSearch from './Search'
import SitesAdministration from './Administration'
import SitesProjects from './Projects/container'
import SitesProject from './Projects/Project/container'
import SitesUser from './User/container'
import NotFound from './NotFound'

function Routes(props) {
  const AuthContainer = () => (
    <div className="mainWrapper">
      <div className="main">
        <Route path="/signin" component={SitesSignin} />
        <Route path="/register/:hash" component={SitesRegister} />
      </div>
    </div>
  )

  const DefaultContainer = () => (
    <div className="mainWrapper">
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={SitesHome} />
          <Route
            path="/signout"
            render={() => {
              Session.clearUser()
              return <Redirect to="/signin" />
            }}
          />
          <Route exact path="/task" component={SitesTask} />
          <Route path="/task/:id" component={SitesTask} />
          <Route exact path="/search" component={SitesSearch} />
          <Route path="/search/:searchTerm" component={SitesSearch} />
          <Route path="/administration" component={SitesAdministration} />
          <Route exact path="/project" component={SitesProjects} />
          <Route exact path="/project/:id" component={SitesProject} />
          <Route exact path="/user/:id" component={SitesUser} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
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
