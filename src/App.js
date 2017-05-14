// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


import React, { Component } from 'react';
import './App.css';
import logo8 from './website-backgrounds/logo8.JPG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Menu-button">
            <h1>Menu</h1>
          </div>
        </div>
        <img src={logo8} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
