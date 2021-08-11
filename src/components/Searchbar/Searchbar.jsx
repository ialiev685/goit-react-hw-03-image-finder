import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchName);

    this.setState({ searchName: '' });
  };

  handleChange = e => {
    this.setState({ searchName: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">найти</button>
        <input type="text" value={this.state.serachName} onChange={this.handleChange} />
      </form>
    );
  }
}
