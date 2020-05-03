import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import { useState } from 'react';

class App extends Component {
  state = {
    persons: [
      { name: "Surya", age: 28 },
      { name: "Neelam", age: 24 },
      { name: "Sachin", age: 25 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Neelam", age: 24 },
        { name: "Sachin", age: 25 }
      ]
    })
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
  }

  render() {
    return (
      <div className="App">
        <h1>I am react app</h1>
        <p>This is really intresting !!!</p>
        <button onClick={this.toggleNameHandler}>Toggle Person</button>
        {
          this.state.showPersons ?
            <div>
              {
                this.state.persons.map(person =>{
                  return <Person 
                    name= {person.name} 
                    age= {person.age}
                    />
                })
              }
            </div> 
            : null
        }

      </div>
    );
  }
}

export default App;
