import axios from 'axios';

export function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com/api/';
  const apiKey = '47358602-d5490533da2bc88f2f38f5bcb';

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
      return data;
      console.log(data.hits);
    })
    .catch(error => {
      console.error(error);
    });
}
