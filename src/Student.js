import React from 'react';
import CardList from './CardList';

class Student extends React.Component {
  render() {
    const { students } = this.props;

    let studentList = students.map(student => {
      return <CardList key={student.id} {...student} />;
    });

    return (
      <div className="App">
        <h1 className="student-header">Student</h1>
        <div style={{ display: 'flex' }}>{studentList}</div>
      </div>
    );
  }
}

export function Example(props) {
  console.log(props);
  return <h1>Students example</h1>;
}

export default Student;
