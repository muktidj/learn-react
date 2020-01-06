import React from "react";
import styled from "styled-components";
//import './Person.css'

const StyledDiv = styled.div`
  width: 60%;
  margin: 13px auto;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  padding: 16px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'am {props.name}, I'am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input name="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
