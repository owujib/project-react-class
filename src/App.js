// import React from 'react';
import React, { Component } from 'react';

import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
      },
      {
        id: 2,
        name: 'Sarah Smith',
        email: 'john@email.com',
      },
      {
        id: 3,
        name: 'Mike Jones',
        email: 'john@email.com',
      },
      {
        id: 4,
        name: 'John Doe',
        email: 'john@email.com',
      },
    ],
  };

  render() {
    const handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };

    const { users } = this.state;
    return (
      <div>
        <CardList person={users} />
        <Form handleChange={handleChange} />
      </div>
    );
  }
}

export default App;
