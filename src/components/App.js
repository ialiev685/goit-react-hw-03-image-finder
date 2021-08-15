import React, { Component } from 'react';

import Searchbar from './Searchbar';

import GetImages from './GetImages';

import Header from './Header';

import Section from './Section';

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
      <>
        <Header>
          <Searchbar onSubmit={this.hadleFormSubmit} />
        </Header>

        <Section>
          <GetImages query={query} />
        </Section>
      </>
    );
  }
}
