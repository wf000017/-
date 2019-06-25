import React from 'react'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img
            src={process.env.PUBLIC_URL + '/img/logo.svg'}
            className="aboutlogo"
            alt="alogo"
          />
          <div className="abouttxt">
            京富公司主力團隊業界實務經驗達三十年以上，曾參與過：
            <div className="aboutli">
              <ul>
                <li>台南武聖</li>
                <li>德興重劃</li>
                <li>大學書香</li>
                <li>綠野傳家堡</li>
                <li>仰德華廈</li>
                <li>東天下</li>
                <li>陽光名邸</li>
                <li>新天地</li>
                <li>悅揚</li>
              </ul>
              等諸多建案，現公司由創辦人游象建先生於中華民國102年6月創立，主要開發北台灣地區，並致力於打造宜人舒適的住宅，
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
