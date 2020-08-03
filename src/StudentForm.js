import React from 'react';

export class StudentForm extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };

  render() {
    return (
      <div className="student-form">
        <h1>Add Student</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            id="name"
            value={this.state.name}
          />
          <br />
          <br />
          <label>email: </label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            id="email"
            value={this.state.email}
          />
          <br />
          <br />
          <input type="submit" value="add student" />
        </form>
      </div>
    );
  }
}

export default StudentForm;
