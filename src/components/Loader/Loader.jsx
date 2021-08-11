import React, { Component } from 'react';

import API from '../../services';

import ImageGallery from '../ImageGallery';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      currentPage: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;

    const { currentPage } = this.state;
    const options = { currentPage, newQuery };

    if (newQuery !== prevQuery) {
      API(options).then(resolved =>
        this.setState(({ gallery, currentPage }) => ({
          gallery: [...gallery, ...resolved.hits],
          currentPage: currentPage + 1,
        })),
      );
    }
  }

  render() {
    const { gallery } = this.state;
    return (
      <div>
        <ImageGallery listGallery={gallery} />
      </div>
    );
  }
}
