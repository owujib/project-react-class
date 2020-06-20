import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };

    this.handleEmail = e => {
      this.setState({
        email: e.target.value,
      });
    };

    this.handleName = e => {
      this.setState({
        name: e.target.value,
      });
    };
    this.handleSubmit = e => {
      e.preventDefault();
      this.props.addContact(this.state);
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={this.handleName}
          type="text"
          id="name"
          placeholder="enter name"
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          value={this.state.email}
          onChange={this.handleEmail}
          type="text"
          id="email"
          placeholder="enter email"
        />
        <br />
        <button>submit</button>
      </form>
    );
  }
}

export default Form;
