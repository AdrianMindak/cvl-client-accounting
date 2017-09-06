import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Footer from '../Footer'
import { WavedAccountingSheet } from '../icons'
import './style.css'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="home-wrapper">
          <div className="home-heading-stack">
            <h3> A Café VonLuck app </h3>
            <h1> accounting </h1>
          </div>
          <div className="home-start">
            <WavedAccountingSheet width="100%" color="#E22545" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Home)
