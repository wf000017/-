import React from 'react'
import './title-ani.css'

function Titleani() {
  return (
    <div className="ani1">
      <header className="ani1-header">
        <img
          src={process.env.PUBLIC_URL + '/img/logo.svg'}
          className="jifu-logo"
          alt="logo"
        />
        <p className="anitxt">京富開發建設有限公司</p>
      </header>
    </div>
  )
}
export default Titleani
