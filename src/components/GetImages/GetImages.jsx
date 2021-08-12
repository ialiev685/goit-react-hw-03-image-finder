import React, { Component } from 'react';

import API from '../../services';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

import ImageGallery from '../ImageGallery';

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
    const query = this.props.query;
    const currentPage = this.state.currentPage;
    const options = { currentPage, query };

    API(options)
      .then(resolved =>
        this.setState(({ gallery, currentPage }) => ({
          gallery: [...gallery, ...resolved.hits],
          currentPage: currentPage + 1,
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
    const { gallery } = this.state;

    return (
      <div>
        <ImageGallery listGallery={gallery} />
        {gallery.length > 0 ? <ButtonLoadMore onClick={this.fetchImages} /> : null}
      </div>
    );
  }
}
