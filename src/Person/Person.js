import React from 'react';

const person = ( props ) => {
  return (
    <div>
  <p>Mortality is a constant. I am {props.adj} and I own {props.number} cats...</p>
  <p>{props.children}</p>
    </div>
)
};

export default person;
