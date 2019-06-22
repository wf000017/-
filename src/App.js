import React from 'react'
import './App.css'
import Titleani from './component/title/title-ani.js'
import Rounterjifu from './component/rounterjifu'
import Footer from './component/footer/footer'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: false })
    }, 1500)
  }
  render() {
    return <>{this.state.animation ? <Titleani /> : <Rounterjifu />}</>
  }
}
export default App
