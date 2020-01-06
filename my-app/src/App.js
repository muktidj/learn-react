import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  padding: 8px;
      border: 1px solid black;
      cursor: pointer;
      &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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

      // styleButton.backgroundColor = "red";
      // styleButton[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    //let classes = ['red', 'bold'].join(' ') //tidak dinamis
    const classes = [];
    if (this.state.person.length <= 2) {
      classes.push("red"); //['red']
    }
    if (this.state.person.length <= 1) {
      classes.push("bold"); //['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'am learn React</h1>
        <p className={classes.join(" ")}>This is really working</p>
        {/* <button onClick={this.switchHandlerName.bind(this, 'Mukti')}>Switch Name</button> */}
        <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>
          Toggle Person
        </StyledButton>
        {persons}
      </div>
    );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
