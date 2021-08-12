import React, { Component } from 'react';

import Searchbar from './Searchbar';

import GetImages from './GetImages';

// import Loader from './Loader';

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
        <GetImages query={query} />
        {/* <Loader query={query} /> */}
      </div>
    );
  }
}
