import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={smallImg} data-modal={largeImg} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
