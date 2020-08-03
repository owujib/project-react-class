import React, { Component } from 'react';

class TeachersForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };

    function handleChange(e) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        console.log(this.state)
      );
    }

    function handleSubmit(e) {
      e.preventDefault();
      this.props.addTeachers(this.state);
      this.setState({
        name: '',
        email: '',
      });
    }

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="student-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="teacher-name">Name:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="teacher-name"
            value={this.state.name}
          />{' '}
          <br />
          <br />
          <label htmlFor="teacher-email">Email:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            id="teacher-email"
          />
          <br />
          <br />
          <input type="submit" value="add teachers" />
        </form>
      </div>
    );
  }
}

export default TeachersForm;
