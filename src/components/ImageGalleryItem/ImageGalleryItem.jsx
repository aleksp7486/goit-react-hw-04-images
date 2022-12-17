import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  onSelectImage,
  webFormatURL,
  largeImageURL,
  tags,
}) => {
  return (
    <Item>
      <Image
        onClick={() => onSelectImage(largeImageURL, tags)}
        src={webFormatURL}
        alt={tags}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webFormatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
