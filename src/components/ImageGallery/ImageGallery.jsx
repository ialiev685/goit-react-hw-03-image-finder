import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ listGallery }) => {
  return (
    <ul>
      {listGallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id} smallImg={webformatURL} largeImg={largeImageURL} tage={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
