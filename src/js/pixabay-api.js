// pixabay-api.js
const API_KEY = '49366841-2722787d336af87d57ebdc2bd'; // Замініть на свій ключ
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data.hits;
};
