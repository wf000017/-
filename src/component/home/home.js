import React from 'react'
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="news">新建案</div>
          <img
            src={process.env.PUBLIC_URL + '/img/newsimg.png'}
            className="newsimg"
            alt="img"
          />
          <ul className="hometxt">
            <li>位於新竹市</li>
            <li>即將推出，敬請期待</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
