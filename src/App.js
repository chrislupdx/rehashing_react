import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { adj: 'spiteful', number: 1000000000000 },
      { adj: 'bitter', number: 12 },
      { adj: 'lonely', number: 1 },
    ],
    otherstate: 'some other value'
  }

  boomHandler = (newThing) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
      { adj: newThing, number: 1000000000000 },
      { adj: 'bitter', number: 12 },
      { adj: 'lonely', number: 11111111 },
      ] })
  }

  nameChangeHandler = (event => {
    this.setState({
      persons: [
      { adj: 'Gross', number: 1000000000000 },
      { adj: event.target.value, number: 12 },
      { adj: 'lonely', number: 11111111 },
      ] })
  })
  render() {
    return (
      <div className="App">
        <h1>am react app</h1>
        <p> i am fake web developer </p>
        <button onClick={() => this.boomHandler('flooof')}> Push to Boom </button>
        < Person
          adj={this.state.persons[0].adj}
          number={this.state.persons[0].number} />
        < Person
          adj={this.state.persons[1].adj}
          number={this.state.persons[1].number}
          click={this.boomHandler.bind(this, 'wrinkly')}
          changed={this.nameChangeHandler} >I enjoy potatoes </Person>
        <Person
          adj={this.state.persons[2].adj}
          number={this.state.persons[2].number} />
      </div>
    );
  // return React.createElement('div', null, React.createElement('h3', {className: 'App'}, 'fools rush on'));
  }
}

export default App;
