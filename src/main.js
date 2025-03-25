import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    return;
  }

  showLoader();
  fetchImages(query, (error, images) => {
    hideLoader();

    if (error) {
      console.error('Error fetching images:', error);
      showMessage('Failed to fetch images. Please try again later.'); // Використання iziToast для показу повідомлення
      return;
    }

    renderImages(images);
  });
});
