import React, { Component } from 'react';
import './App.css';
import color1 from './website-backgrounds/with-color/color1.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={color1} className="App-logo" alt="logo" />

        <div className="App-body">
          <div className="About-me">
            <h1>About</h1>
            <p>Daniel Rector is a programmer residing in East Tennessee.
              He has worked on MEAN stack web apps.
              Currently, he is building web apps with React.
              He also dabbles in develpment for iOS.
              When he isn't programming, Daniel likes to write and record music with his friends.</p>
          </div>
          <div className="Projects-worked-on">
            <h1>Projects</h1>
            <h3>
              <a target="_blank" href="https://out-of-context-comics.herokuapp.com">Out of Context comics</a>
            </h3>
            <h3>
              <a target="_blank" href="https://brutality.herokuapp.com">Brutality</a>
            </h3>
          </div>
        </div>

        <div className="App-footer">
          <ul>
            <li ><a target="_blank" href="https://soundcloud.com/drector1">Music</a></li>
            <li ><a target="_blank" href="https://twitter.com/danielkrector">Twitter</a></li>
            <li ><a target="_blank" href="https://www.instagram.com/drector1/">Instagram</a></li>
            <li ><a target="_blank" href="https://github.com/drector1">Github</a></li>
            <li ><a href="mailto:rector.danielk@gmail.com?subject=Hello&body=Hi">Email</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
