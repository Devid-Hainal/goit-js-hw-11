import axios from 'axios';

//
import axios from 'axios';

export function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com/api/';
  const apiKey = '50359228-ebb7418fee3d098d1b6e8dc12';

  return axios
    .get(
      `${baseURL}?key=${apiKey}&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true&page=1`
    )
    .then(response => response.data.hits)
    .catch(error => console.error(error));
}
