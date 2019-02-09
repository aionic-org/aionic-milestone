import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactModal from 'react-modal'

import './App.css'

import ScrollToTop from './components/ScrollToTop'
import Routes from '../Routes'
import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {
  componentDidMount = () => {
    ReactModal.setAppElement('body')
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Switch>
            <ScrollToTop>
              <div className="App" id="App">
                <Routes />
              </div>
            </ScrollToTop>
          </Switch>
        </Router>
      </ErrorBoundary>
    )
  }
}

export default App
