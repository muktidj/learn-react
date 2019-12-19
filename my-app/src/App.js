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

  render() {
  return (
    <div className="App">
      <h1>Hi, I'am learn React</h1>
      <button>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} />
      <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbies: Reading </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>

    </div>
  );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
