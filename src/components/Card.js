import React, { Component } from 'react';
import reactLogo from '../logo.svg';

const Card = ({ person }) => {
  return (
    <div style={style}>
      <img src={reactLogo} alt="..logo" />
      <h1>{person.name}</h1>
      <h1>{person.email}</h1>
    </div>
  );
};

const style = {
  margin: '5px',
  padding: '2px',
  boxShadow: '2px, 4px, 10px #ccc',
  border: '1px solid black',
  width: '350px',
};

export default Card;
