import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Showcase from './Components/Showcase/Showcase';
import './../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper">
        <Landing />
        <Showcase data={data} />
      </div>
    );
  }
}

export default App;
