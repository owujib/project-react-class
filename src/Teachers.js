import React, { Component } from 'react';
import CardList from './CardList';

class Teachers extends Component {
  render() {
    let { teachers } = this.props;
    const teachersList = teachers.map(teacher => {
      return <CardList {...teacher} key={teacher.id} />;
    });
    return (
      <div>
        <h1>Teachers</h1>
        <div style={{ display: 'flex' }}>{teachersList}</div>
      </div>
    );
  }
}

export default Teachers;
