import React from 'react';

export default function BlogData(props) {
  console.log(props);
  const { title, body } = props.posts;
  return (
    <div>
      {' '}
      <h1>{title}</h1>
      <p>{body}</p>{' '}
    </div>
  );
}
