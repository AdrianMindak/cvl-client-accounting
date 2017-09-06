import React, { Component } from 'react'

export default class MadeWithLoveByAricmA extends Component {
  render() {
    return (
      <div id="madeWithLoveByAricmA">
        <h3>
          <a href="#">
            Coded with
            <svg fill={ this.props.color } width={ this.props.scale || "20px" } height={ this.props.scale || "20px" } version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="m83.332 27.082c-2.293-4.168-16.668-18.125-33.332 2.082-17.5-20.207-31.043-6.25-33.332-2.082-4.168 7.707-1.668 19.375 4.168 25l29.168 29.168 29.168-29.168c5.8281-5.625 8.3281-17.289 4.1602-25z"/>
            </svg>
             by Adrian Mindak .
          </a>
        </h3>
      </div>
    )
  }
}
