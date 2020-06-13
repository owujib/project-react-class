import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const personList = this.props.person.map(person => (
      <Card key={person.id} person={person} />
    ));
    return <div style={styles}>{personList}</div>;
    // return <div style={{ background: 'red', margin: `2px` }}>{personList}</div>;
  }
}

const styles = {
  display: 'flex',
};
