import React from 'react';
import CardList from './components/CardList';

import './App.css';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 1, name: 'John Doe', email: 'john@email.com' },
        { id: 2, name: 'Mike Johes', email: 'mike@email.com' },
        { id: 3, name: 'Sarah', email: 'sarah@email.com' },
      ],
    };
  }

  addContacts = contacts => {
    contacts.id = this.state.contacts.length + 1;
    let newContact = [...this.state.contacts, contacts];
    this.setState({ contacts: newContact }, console.log(this.state));
  };

  render() {
    return (
      <div>
        <h1>
          Hello world welcome to REACT
          <span role="img" aria-label="emoji">
            {' '}
            👌👌👌
          </span>{' '}
        </h1>

        <CardList contacts={this.state.contacts} />
        <Form addContact={this.addContacts} />
      </div>
    );
  }
}

export default App;
