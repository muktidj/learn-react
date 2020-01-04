import React from "react";
import Radium from "radium";
import './Person.css'

const person = props => {
  const stylePerson = {
    '@media (min-width:500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={stylePerson}>
      <p onClick={props.click}>
        I'am {props.name}, I'am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input name="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
