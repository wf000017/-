import React from 'react'
import './App.css'
import Titleani from './component/title/title-ani.js'
import Rounterjifu from './component/rounterjifu'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ani: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ ani: false })
    }, 2500)
  }
  render() {
    return (
      <>
        {this.state.ani ? <Titleani /> : ''}

        <Rounterjifu />
      </>
    )
  }
}
export default App
