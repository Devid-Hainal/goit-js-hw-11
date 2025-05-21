import axios from 'axios';

  export function getImagesByQuery(query) {
    const baseURL = 'https://pixabay.com/api/';
    const apiKey = '50359228-ebb7418fee3d098d1b6e8dc12';

    const url = `${baseURL}?key=${apiKey}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true&page=1`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => {
        return data.hits;
      })
      .catch(error => {
        console.error(error);
      });
  }
