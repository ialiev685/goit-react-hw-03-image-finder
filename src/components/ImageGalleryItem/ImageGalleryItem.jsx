import './ImageGalleryItem.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={smallImg} data-modal={largeImg} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
