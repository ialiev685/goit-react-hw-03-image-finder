const ImageGalleryItem = ({ smallImg, largeImg, tags }) => {
  return (
    <li>
      <img src={smallImg} data-large={largeImg} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
