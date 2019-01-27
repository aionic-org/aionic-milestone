import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Session } from '../services/session'

import Navbar from '../components/Navigation/Navbar/'
import Footer from '../components/Navigation/Footer/'

import ContainersSignin from './Signin/'
import ContainersRegister from './Register/'
import ContainersHome from './Home/'
import ContainersTask from './Task/'
import ContainersSearch from './Search'
import ContainersSettings from './Settings'

function Routes(props) {
  const AuthContainer = () => (
    <div className="mainWrapper">
      <div className="main">
        <Route path="/signin" component={ContainersSignin} />
        <Route path="/register/:hash" component={ContainersRegister} />
      </div>
    </div>
  )

  const DefaultContainer = () => (
    <div className="mainWrapper">
      <Navbar />
      <div className="main">
        <Route exact path="/" component={ContainersHome} />
        <Route
          path="/signout"
          render={() => {
            Session.signoutUser()
            return <Redirect to="/signin" />
          }}
        />
        <Route exact path="/task" component={ContainersTask} />
        <Route exact path="/task/:id" component={ContainersTask} />
        <Route path="/search/:searchTerm" component={ContainersSearch} />
        <Route path="/settings" component={ContainersSettings} />
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
