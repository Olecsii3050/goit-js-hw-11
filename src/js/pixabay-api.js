const API_KEY = '49366841-2722787d336af87d57ebdc2bd';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (query, callback) => {
  axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.status !== 200) {
        callback(new Error('Failed to fetch images.'));
        return;
      }
      callback(null, response.data.hits);
    })
    .catch(error => {
      callback(error);
    });
};
