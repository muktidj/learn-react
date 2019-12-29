import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { id: "a1", name: "Mukti DJ", age: 21 },
      { id: "a2", name: "Ayu Retno", age: 22 },
      { id: "a3", name: "Imam Taufik", age: 21 },
    ],
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(personID => {
      return personID.id === id;
    });

    const person = {
      ...this.state.person[personIndex],
      // Memliki salinan tidak boleh langsung diubah
    };

    // const persons = Object.assign({}, this.state.person[personIndex]) *alternatif syntax
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({ person: persons });
  };

  deletePersonHandler = personIndex => {
    // const person = this.state.person.slice()

    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person: person });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const styleButton = {
      backgroundColor: "#eee",
      font: "inherit",
      padding: "8px",
      border: "1px solid black",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((persons, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                changed={event => this.nameChangeHandler(event, persons.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'am learn React</h1>
        {/* <button onClick={this.switchHandlerName.bind(this, 'Mukti')}>Switch Name</button> */}
        <button style={styleButton} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
