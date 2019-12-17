import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hi, I'am learn React</h1>
      <Person />
    </div>
  );
  }
  // React Without JSX in Background
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
