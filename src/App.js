import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>am react app</h1>
        <p> things are not what they seem </p>
      </div>
    );
  // return React.createElement('div', null, React.createElement('h3', {className: 'App'}, 'fools rush on'));
  }
}

export default App;
