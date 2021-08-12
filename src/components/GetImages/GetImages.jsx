import React, { Component } from 'react';

import API from '../../services';

import ImageGallery from '../ImageGallery';

import Loader from 'react-loader-spinner';

export default class GetImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      currentPage: 1,
      status: 'waiting',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const newQuery = this.props.query;

    if (newQuery !== prevQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ status: 'padding' });

    const query = this.props.query;
    const currentPage = this.state.currentPage;
    const options = { currentPage, query };

    API(options)
      .then(resolved =>
        this.setState(({ gallery, currentPage }) => ({
          gallery: [...gallery, ...resolved.hits],
          currentPage: currentPage + 1,
          status: 'resolved',
        })),
      )
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  render() {
    const { gallery, status } = this.state;

    if (status === 'waiting') {
      return null;
    }

    if (status === 'resolved') {
      return <ImageGallery listGallery={gallery} loadMore={this.fetchImages} />;
    }

    if (status === 'padding') {
      return <Loader type="Oval" color="#00BFFF" height={100} width={100} />;
    }
  }
}
