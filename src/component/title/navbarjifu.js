import React from 'react'
import './navbarjifu.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap'
class Navbarjifu extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <NavLink to="/">
              <Form inline>
                <img
                  src={process.env.PUBLIC_URL + '/img/logo.svg'}
                  className="jifu-logo1"
                  alt="logo"
                />
                <h2>京富開發建設</h2>
              </Form>
            </NavLink>
            <Nav className="mr-auto">
              <div className="txt1">
                <NavLink to="/">首頁</NavLink>
                <NavLink to="/about">公司簡介</NavLink>
                <NavLink to="/example">實績案例</NavLink>
              </div>
            </Nav>
          </div>
        </Navbar>
      </>
    )
  }
}
export default Navbarjifu
