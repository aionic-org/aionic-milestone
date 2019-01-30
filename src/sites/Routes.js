import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Session } from 'services/session'

import Navbar from 'components/Navigation/Navbar/'
import Footer from 'components/Navigation/Footer/'

import SitesSignin from './Signin/'
import SitesRegister from './Register/'
import SitesHome from './Home/'
import SitesTask from './Task/container'
import SitesSearch from './Search'
import SitesSettings from './Settings'
import SitesProjects from './Projects/container'
import SitesProject from './Projects/Project/container'

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
        <Route exact path="/" component={SitesHome} />
        <Route
          path="/signout"
          render={() => {
            Session.signoutUser()
            return <Redirect to="/signin" />
          }}
        />
        <Route exact path="/task" component={SitesTask} />
        <Route exact path="/task/:id" component={SitesTask} />
        <Route path="/search/:searchTerm" component={SitesSearch} />
        <Route path="/settings" component={SitesSettings} />
        <Route exact path="/project" component={SitesProjects} />
        <Route exact path="/project/:id" component={SitesProject} />
      </div>
      <Footer />
    </div>
  )

  return (
    <Switch>
      <Route path="/signin" component={AuthContainer} />
      <Route path="/register/:hash" component={AuthContainer} />
      <Route
        render={props => (Session.isLoggedIn() ? <DefaultContainer /> : <Redirect to="/signin" />)}
      />
    </Switch>
  )
}

export default Routes
