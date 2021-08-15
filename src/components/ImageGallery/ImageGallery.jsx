import ImageGalleryItem from '../ImageGalleryItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import './ImageGallery.scss';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dataModal: '',
    };
  }

  handleShowModal = e => {
    if (e.target.nodeName === 'IMG') {
      const alt = e.target.alt;

      const src = e.target.dataset.modal;
      const dataModal = { src, alt };
      this.sendDataModal(dataModal);
    }
  };

  sendDataModal = data => {
    this.setState({ dataModal: data });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { listGallery } = this.props;
    const {
      dataModal: { src, alt },
      showModal,
    } = this.state;

    return (
      <>
        <ul className="ImageGallery" onClick={this.handleShowModal}>
          {listGallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>

        {showModal && <Modal onClose={this.toggleModal} src={src} alt={alt} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  listGallery: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
