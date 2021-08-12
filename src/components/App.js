import React, { Component } from 'react';

import Searchbar from './Searchbar';

import GetImages from './GetImages';

import Header from './Header';

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
        <Header>
          <Searchbar onSubmit={this.hadleFormSubmit} />
        </Header>

        <GetImages query={query} />
        {/* <Loader query={query} /> */}
      </div>
    );
  }
}
