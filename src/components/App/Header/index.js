import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { HomeHouse, UserIcon } from '../../icons'
import './style.css'

class Header extends Component {

  render() {
    return (
      <div className='header-menue'>
        <Link to='/dashboard'>
          <div className="icon">
            <HomeHouse width="35px" color="#E22545"/>
          </div>
        </Link>
        <Link to='/login'>
          <div className="icon">
            <UserIcon width="35px" color="#E22545"/>
          </div>
        </Link>
      </div>
    )
  }

}

export default withRouter(Header)
