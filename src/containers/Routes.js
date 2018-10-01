import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Session } from '../services/session'

import Navbar from '../components/Navigation/Navbar/'
import Footer from '../components/Navigation/Footer/'

import ContainersSignin from './Signin/'
import ContainersRegister from './Register/'
import ContainersHome from './Home/'
import ContainersTaskMain from './Task/Main/'
import ContainersTaskCreate from './Task/Create/'

export function Routes(props) {
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
        <Route path="/task/:id" component={ContainersTaskMain} />
        <Route path="/create/task" component={ContainersTaskCreate} />
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
