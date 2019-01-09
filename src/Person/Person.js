import React from 'react';
import './Person.css';

const person = ( props ) => {
  return (
    <div className = "Person">
      <p onClick={props.click}>Mortality is a constant. I am {props.adj} and I own {props.number} cats...</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value = {props.name} />
    </div>
)
};

export default person;
