import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeContainer } from './Home/Home.container'

export function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  )
}
