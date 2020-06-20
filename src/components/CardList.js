import React from 'react';
import CardData from './CardData';

function CardList(props) {
  console.log(props);
  return (
    <div style={cardStyle}>
      {props.contacts.map(contact => {
        return <CardData key={contact.id} value={contact} />;
      })}
    </div>
  );
}

const cardStyle = {
  display: 'flex',
};

export default CardList;
