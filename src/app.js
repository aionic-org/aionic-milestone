import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactModal from 'react-modal'

import Routes from './sites/Routes'

import ErrorBoundary from 'components/Utility/ErrorBoundary'

class App extends Component {
  componentDidMount = () => {
    ReactModal.setAppElement('body')
  }

  toggleSidebar = () => {
    document.getElementById('App').classList.toggle('toggled')
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <div id="App">
            <Switch>
              <Routes toggleSidebar={this.toggleSidebar} />
            </Switch>
          </div>
        </Router>
      </ErrorBoundary>
    )
  }
}

export default App
