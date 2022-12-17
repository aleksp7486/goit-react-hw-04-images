import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages(query = '', pageSize = 12, page = 1) {
  const params = new URLSearchParams({
    key: '30931366-a07d02e157d3797ab4f355b57',
    q: `${query}`,
    lang: 'en,ru',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: `${pageSize}`,
    page: `${page}`,
  });

  const response = await axios.get(`?${params}`, { headers: {} });
  console.log(response);
  return response;
}

const api = {
  getImages,
};

export default api;
