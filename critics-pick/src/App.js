import React, { Component } from 'react';

import './App.css';
import data from './data/data.json';

import Landing from './Components/Landing';
import Showcase from './Components/Showcase/Showcase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://www.skasliwal.com/data/data.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
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
