import ImageGalleryItem from '../ImageGalleryItem';
import React, { Component } from 'react';

import Modal from '../Modal';

import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

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
    const { listGallery, loadMore } = this.props;
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
        {listGallery.length > 0 && <ButtonLoadMore onClick={loadMore} />}
        {showModal && <Modal onClose={this.toggleModal} src={src} alt={alt} />}
      </>
    );
  }
}

export default ImageGallery;
