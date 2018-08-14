import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import ScrollToTop from '../Misc/ScrollToTop'
import { Routes } from '../../containers/Routes'

export class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <div className="main container-fluid">
              <Routes />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}
