import React, { Component } from 'react'
import PageHeader from '@/components/header'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <PageHeader></PageHeader>
        <div className="home-container"></div>
      </div>
    )
  }
}
export default Home