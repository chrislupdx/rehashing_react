import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { adj: 'spiteful', number: 1000000000000 },
      { adj: 'bitter', number: 12 },
      { adj: 'lonely', number: 0 },
    ],
    otherstate: 'some other value'
  }

  boomHandler = () => {
    // console.log('Was clicked');
    this.setState({
      persons: [
      { adj: 'hangry', number: 1000000000000 },
      { adj: 'bitter', number: 12 },
      { adj: 'lonely', number: 1 },
      ] })
  }

  render() {
    return (
      <div className="App">
        <h1>am react app</h1>
        <p> i am fake web developer </p>
        <button onClick={this.boomHandler}> Push to Boom </button>
        < Person adj={this.state.persons[0].adj} number={this.state.persons[0].number} />
        < Person adj={this.state.persons[1].adj} number="1333333" />
        < Person adj={this.state.persons[2].adj} number="2" /> I do however really enjoy romance novels <Person/>
      </div>
    );
  // return React.createElement('div', null, React.createElement('h3', {className: 'App'}, 'fools rush on'));
  }
}

export default App;
