import React from 'react'
import './footer.css'
import Footer2 from './footer2'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer1">
        <Footer2 />
        <p className="text">
          Copyright © 京富開發建設有限公司 / 統一編號：54279369
        </p>
      </div>
    )
  }
}
export default Footer
