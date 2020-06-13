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

  handleSumbit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    let newId = this.state.users.length + 1;
    this.setState({
      id: newId,
      [e.target.id]: e.target.value,
      ...this.state.users,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <CardList person={users} />
        <form onSubmit={this.handleSumbit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="input your name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="input your email"
            onChange={this.handleChange}
          />
          <br />
          <button>Sumbit</button>
        </form>
      </div>
    );
  }
}

export default App;
