import React, { Component } from 'react';

import './Searchbar.scss';

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
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button className="SearchForm-button" type="submit">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={this.state.serachName}
          onChange={this.handleChange}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
