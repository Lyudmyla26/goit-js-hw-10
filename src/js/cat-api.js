import Notiflix from 'notiflix';
const API_KEY =
  'live_YfJvef9rlUTtEByUgRldjWVwx689jzJfQbtsZu7HiBC3nLOT7xeKKfdBcqjsYf8v';
const BASE_URL = 'https://api.thecatapi.com/v1/';
export const options = {
  width: '555px',
  fontSize: '18px',
  position: 'center-bottom',
  distance: '33px',
  borderRadius: '13px',
  timeout: 2200,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
};

export const fetchBreeds = function () {
  return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      Notify.failure(
        'Oops! Something went wrong! Try reloading the page!',
        options
      );
    }
    return response.json();
  });
};
export const fetchCatByBreed = function (breedId) {
  return fetch(
    `${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
      Notify.failure(
        'Oops! Something went wrong! Try reloading the page!',
        options
      );
    }
    return response.json();
  });
};
