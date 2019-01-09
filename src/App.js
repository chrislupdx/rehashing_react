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
    otherstate: 'some other value',
    showPersons: false
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

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x solid red',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>am react app</h1>
        <p> i am fake web developer </p>
        <button
          style={style}
          onClick={this.togglePersonHandler}> Toggle Statements </button>
        {
          this.state.showPersons === true ?
          <div>
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
        </div> : null
      }
      </div>
    );
  // return React.createElement('div', null, React.createElement('h3', {className: 'App'}, 'fools rush on'));
  }
}

export default App;
