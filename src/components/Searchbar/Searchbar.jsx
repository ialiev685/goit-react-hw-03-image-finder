import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serachName: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    // this.setState({ serachName: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">найти</button>
      </form>
    );
  }
}
