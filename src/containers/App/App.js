import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import ScrollToTop from './components/ScrollToTop'
import { Navbar } from '../../components/Navigation/Navbar/Navbar'
import { Routes } from '../Routes'
import { Footer } from '../../components/Navigation/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Navbar />
            <div className="main">
              <Routes />
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}
