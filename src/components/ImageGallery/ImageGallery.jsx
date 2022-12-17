import PropTypes, { arrayOf } from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, ...otherProps }) => {
  return (
    <Gallery>
      {images.map(el => (
        <ImageGalleryItem
          key={el.id}
          {...otherProps}
          webFormatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          tags={el.tags}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: arrayOf(PropTypes.object),
};

export default ImageGallery;
