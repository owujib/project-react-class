import React from 'react';

class Student extends React.Component {
  render() {
    console.log(this.props);
    const { students } = this.props;

    let studentList = students.map(student => {
      return (
        <div style={cardStyle} key={student.id}>
          <p>name: {student.name}</p>
          <p>email: {student.email}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <h1 className="student-header">Student</h1>
        <div style={{ display: 'flex' }}>{studentList}</div>
      </div>
    );
  }
}

const cardStyle = {
  color: 'red',
  margin: '10px',
  border: '0px solid #ccc',
  boxShadow: '0px 0px 10px #000',
  padding: '10px',
  borderRadius: '10px',
};

export default Student;
