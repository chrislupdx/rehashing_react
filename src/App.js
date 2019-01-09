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



  nameChangeHandler = (event => {
    this.setState({
      persons: [
      { adj: 'Gross', number: 1000000000000 },
      { adj: event.target.value, number: 12 },
      { adj: 'lonely', number: 11111111 },
      ] })
  })

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

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

    let persons = null;

    if (this.state.showPersons){
        persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={ () => this.deletePersonHandler(index)}
              name={person.adj}
              age={person.number} />
          })}
        </div>

      );
    }

    return (
      <div className="App">
        <h1>am react app</h1>
        <p> i am fake web developer </p>
        <button
          style={style}
          onClick={this.togglePersonHandler}> Toggle Statements </button>
        {persons}

      </div>
    );
  // return React.createElement('div', null, React.createElement('h3', {className: 'App'}, 'fools rush on'));
  }
}

export default App;
