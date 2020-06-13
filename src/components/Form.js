import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    // console.log(this.props);
    const { handleChange } = this.props;

    const handleSumbit = e => {
      e.preventDefault();
    };
    return (
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="input your name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="input your email"
          onChange={handleChange}
        />
        <br />
        <button>Sumbit</button>
      </form>
    );
  }
}
