import React, { Component } from 'react';

import API from '../../services';

import ImageGallery from '../ImageGallery';

import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

import Loader from '../Loader';

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

    let button;

    if (gallery.length > 0 && status === 'resolved') {
      button = <ButtonLoadMore onClick={this.fetchImages} />;
    } else if (status === 'padding') {
      button = <Loader />;
    }

    return (
      <>
        <ImageGallery listGallery={gallery} />

        {button}
      </>
    );
  }
}
