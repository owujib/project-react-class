import React from 'react';

export default function CardList({ id, name, email }) {
  return (
    <div>
      <div className="card-style" key={id}>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
    </div>
  );
}
