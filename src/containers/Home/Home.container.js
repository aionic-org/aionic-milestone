import React, { Component } from 'react'

import './Home.container.css'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Home Container</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
