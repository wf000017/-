import React from 'react'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about">
        <img
                  src={process.env.PUBLIC_URL + '/img/logo.svg'}
                  className="jifu-logo2"
                  alt="logo2"
                />
        </div>
      </div>
    )
  }
}

export default About
