import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css'

import ScrollToTop from './components/ScrollToTop'
import { Routes } from '../Routes'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTop>
            <div className="App">
              <Routes />
            </div>
          </ScrollToTop>
        </Switch>
      </Router>
    )
  }
}
