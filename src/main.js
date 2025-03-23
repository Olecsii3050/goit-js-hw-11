import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    return;
  }

  showLoader();
  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    showMessage('Failed to fetch images. Please try again later.');
  } finally {
    hideLoader();
  }
});
