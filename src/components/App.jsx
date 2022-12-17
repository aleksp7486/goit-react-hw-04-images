import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AppBox } from './App.styled';
import { Box } from 'utils/Box';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Api from 'services/publicationsApi';
import Modal from './Modal';

const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pageSize = 12;

  useEffect(() => {
    if (page === totalPages || totalPages === 1) {
      toast.info('Это все изображения по вашему запросу');
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    Api.getImages(query, pageSize, page)
      .then(items => {
        if (items.data.hits.length === 0) {
          toast.error('Изображения по вашему запросу не найдены');
          return;
        }
        setGalleryItems(prev => [...prev, ...items.data.hits]);
        setTotalPages(Math.ceil(items.data.totalHits / pageSize));
      })
      .catch(error => console.warn(error))
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const onSearchBarSubmit = value => {
    if (value === query || value === '') {
      return;
    }
    setGalleryItems([]);
    setPage(1);
    setTotalPages(null);
    setQuery(value.trim());
  };

  const onLoadButtonClick = () => {
    setPage(state => state + 1);
  };

  const onSelectImage = (url, tags) => {
    setSelectedImage({ url, tags });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <AppBox>
      <SearchBar onSearchBarSubmit={onSearchBarSubmit} />
      {galleryItems.length > 0 && (
        <ImageGallery onSelectImage={onSelectImage} images={galleryItems} />
      )}
      {isLoading && <Loader />}
      {galleryItems.length > 0 && page < totalPages && (
        <Box textAlign="center">
          <Button onClick={onLoadButtonClick}>Load more</Button>
        </Box>
      )}
      {selectedImage && (
        <Modal closeModal={closeModal}>
          <img src={selectedImage.url} alt={selectedImage.tags} />
        </Modal>
      )}
      <ToastContainer />
    </AppBox>
  );
};

export default App;
