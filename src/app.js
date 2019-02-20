import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactModal from 'react-modal'

import './app.css'

import Routes from './sites/Routes'

import ErrorBoundary from 'components/Utility/ErrorBoundary'

class App extends Component {
  componentDidMount = () => {
    ReactModal.setAppElement('body')
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <div id="App">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </Router>
      </ErrorBoundary>
    )
  }
}

export default App
