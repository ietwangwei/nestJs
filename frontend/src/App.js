import React, { Component } from 'react'
import './App.scss'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <Header></Header>
        </div>
        <div className="page-container"></div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default App
