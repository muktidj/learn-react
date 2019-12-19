import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hi, I'am learn React</h1>
      <Person name="Mukti DJ" age="21" />
      <Person name="Ayu Retno" age="22"> My Hobbies: Reading </Person>
      <Person name="Imam Taufik" age="21"/>

    </div>
  );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
