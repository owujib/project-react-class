import React from 'react';
import logo from '../logo.svg';

const CardData = props => {
  const { name, email } = props.value;
  return (
    <div
      className="App"
      style={{
        boxShadow: '0px 3px 10px 3px #ccc',
        margin: '10px',
        borderRadius: '10px',
      }}
    >
      <ul>
        <li>
          {/* <img width="150" height="150" src={logo} alt="...profile_img" /> */}
          <img
            width="150"
            height="150"
            src="https://th.bing.com/th/id/OIP.tHluP4chQzW31oRhD-mqogHaHa?w=212&h=212&c=7&o=5&pid=1.7"
            alt="...profile_img"
          />
        </li>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default CardData;
