import React from 'react';
import './App.css';

import Student, { Example } from './Student';
import StudentForm from './StudentForm';
import Teachers from './Teachers';
import TeachersForm from './TeachersForm';

class App extends React.Component {
  state = {
    students: [
      { id: 1, name: 'John', email: 'john@email.com' },
      { id: 2, name: 'Mike', email: 'mike@email.com' },
      { id: 3, name: 'Sarah', email: 'sarah@email.com' },
    ],
    teachers: [
      { id: 1, name: 'Biodun', email: 'biodun@email.com' },
      { id: 2, name: 'James', email: 'james@email.com' },
      { id: 3, name: 'Smart', email: 'smart@email.com' },
    ],
  };

  addStudent = data => {
    let newID = this.state.students.length + 1;
    let newData = { id: newID, ...data };
    this.setState({
      students: [...this.state.students, newData],
    });
  };

  addTeachers = data => {
    let newID = this.state.teachers.length + 1;
    let newData = { id: newID, ...data };
    console.log(...this.state.teachers, newData);
    this.setState({
      teachers: [...this.state.teachers, newData],
    });
  };

  render() {
    const { students, teachers } = this.state;
    return (
      <div>
        <Student students={students} />
        <StudentForm addStudent={this.addStudent} />
        <hr />
        <Teachers teachers={teachers} />
        <TeachersForm addTeachers={this.addTeachers} />
        <Example />
      </div>
    );
  }
}

export default App;
