import React, { Component } from 'react';
import './App.css';
import logo8 from './website-backgrounds/logo8.JPG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo8} className="App-logo" alt="logo" />

        <div className="App-body">
          <h1>Projects I've worked on.</h1>
        </div>

        <div className="App-footer">
          <ul>
            <li ><a target="_blank" href="https://soundcloud.com/drector1">Music</a></li>
            <li ><a target="_blank" href="https://twitter.com/danielkrector">Twitter</a></li>
            <li ><a target="_blank" href="https://www.instagram.com/drector1/">Instagram</a></li>
            <li ><a href="mailto:rector.danielk@gmail.com?subject=Hello&body=Hi">Email</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
