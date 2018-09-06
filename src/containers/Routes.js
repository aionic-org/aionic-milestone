import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeContainer } from './Home/Home.container'

import { SigninContainer } from './Signin/Signin.container'
import { RegisterContainer } from './Register/Register.container'

import { TaskContainer } from './Tasks/Task.container'
import { TaskCreateContainer } from './Tasks/Create/TaskCreate.container'

export function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />

      <Route path="/signin" component={SigninContainer} />
      <Route path="/register/:hash" component={RegisterContainer} />

      <Route path="/task/:id" component={TaskContainer} />
      <Route path="/create/task" component={TaskCreateContainer} />
    </Switch>
  )
}
