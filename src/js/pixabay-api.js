import axios from 'axios';

export function getImagesByQuery(query) {
  const baseURL = 'https://pixabay.com/api/';
  const apiKey = '47358602-d5490533da2bc88f2f38f5bcb';

  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
  };

  return axios
    .get(baseURL, { params })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error.message);
      throw error;
    });
}
