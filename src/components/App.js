import React, { Component } from 'react';

import Searchbar from './Searchbar';

import Loader from './Loader';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  hadleFormSubmit = searchName => {
    this.setState({ query: searchName });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.hadleFormSubmit} />
        <Loader query={query} />
      </div>
    );
  }
}
