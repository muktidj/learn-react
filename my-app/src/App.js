import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi, I'am learn React</h1>
  //   </div>
  // );

  // React Without JSX in Background 
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does is it Work ?'))
}

export default App;
