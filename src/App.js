import React from 'react';
import './App.css';

import Student from './Student';
import StudentForm from './StudentForm';

class App extends React.Component {
  state = {
    students: [
      { id: 1, name: 'John', email: 'john@email.com' },
      { id: 2, name: 'Mike', email: 'mike@email.com' },
      { id: 3, name: 'Sarah', email: 'sarah@email.com' },
    ],
  };

  addStudent = data => {
    let newId = this.state.students.length + 1;
    let newStudent = { id: newId, data };
    this.setState(
      {
        ...this.state.students,
        {new}
      },
      console.log(this.state)
    );
  };

  render() {
    const { students } = this.state;
    return (
      <div>
        <Student students={students} />
        <StudentForm addStudent={this.addStudent} />
      </div>
    );
  }
}

export default App;
