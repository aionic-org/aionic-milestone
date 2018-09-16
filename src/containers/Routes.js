import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Navbar } from '../components/Navigation/Navbar/Navbar'
import { Footer } from '../components/Navigation/Footer/Footer'

import { SigninContainer } from './Signin/Signin.container'
import { RegisterContainer } from './Register/Register.container'

import { HomeContainer } from './Home/Home.container'
import { TaskContainer } from './Tasks/Task.container'
import { TaskCreateContainer } from './Tasks/Create/TaskCreate.container'
import { Session } from '../services/session'

export function Routes(props) {
  const AuthContainer = () => (
    <div className="mainWrapper">
      <div className="main">
        <Route path="/signin" component={SigninContainer} />
        <Route path="/register/:hash" component={RegisterContainer} />
      </div>
    </div>
  )

  const DefaultContainer = () => (
    <div className="mainWrapper">
      <Navbar />
      <div className="main">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/task/:id" component={TaskContainer} />
        <Route path="/create/task" component={TaskCreateContainer} />
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
