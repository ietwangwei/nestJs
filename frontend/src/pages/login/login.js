import React, { Component } from 'react'
class Component_name extends Component {
  render() {
    return (
      <div className="login">

      </div>
    )
  }
}
export default Component_name

function a() {
  debugger
  var i = 0
  return () => {
    console.log(i++)
  }
}

var f1 = a(),
    f2 = a()

f1()
f1()
f2()