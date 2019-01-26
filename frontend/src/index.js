import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.scss'
import Router from './router'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <div className="app">
    <Router />
  </div>,
  document.getElementById('root')
)

serviceWorker.unregister()