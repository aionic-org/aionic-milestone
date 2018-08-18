import React, { Component } from 'react'

import './Home.container.css'
import { Navbar } from '../../components/Navigation/Navbar/Navbar'
import { Footer } from '../../components/Navigation/Navbar/Footer'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="HomeContainer">
        <Navbar />
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h1>Home Container</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
