import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

state = {
  person: [

    {name:"Mukti DJ", age:21},
    {name:"Ayu Retno", age:22},
    {name:"Imam Taufik", age:21}
  ]
}

switchHandlerName = (newName) => {
  console.log('Saya diklik');
  //DON'T DO THIS this.state.person[0].name = 'Mukti'

  this.setState({
    person: [

      {name:newName, age:21},
      {name:"Ayu Retno Mukti", age:22},
      {name:"Imam Taufik", age:30}
    ],
    otherState: 'Some Other Value',
    showPerson : 'false'
  })

}
    nameChangeHandler = (event) => {
      this.setState({
        person: [

          {name:"Mukti DJ", age:21},
          {name:"Ayu Retno", age:22},
          {name:event.target.value, age:21}
        ]
    })
  }

      togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
      }


  render() {

    const styleButton = {
      backgroundColor : '#eee',
      font : 'inherit',
      padding : '8px',
      border : '1px solid black',
      cursor : 'pointer'
    }

    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
        {this.state.person.map(persons => {
          return <Person
                    name={persons.name}
                    age={persons.age}
                  />
        })}

        </div>

      )
    }


  return (
    <div className="App">
      <h1>Hi, I'am learn React</h1>
      {/* <button onClick={this.switchHandlerName.bind(this, 'Mukti')}>Switch Name</button> */}
      <button
      style={styleButton}
      onClick={this.togglePersonHandler}>Toggle Person</button>
      {persons}

    </div>
  );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
