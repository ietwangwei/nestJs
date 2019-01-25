import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <h1>Example heading <span className="badge badge-secondary">New</span></h1>
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge badge-light">4</span>
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
