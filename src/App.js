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
    let newID = this.state.students.length + 1;
    let newData = { id: newID, ...data };
    this.setState({
      students: [...this.state.students, newData],
    });
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
