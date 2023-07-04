import { fetchBreeds, fetchCatByBreed } from '../js/cat-api';
const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const cat = document.querySelector('.cat-info');
loader.style.display = 'none';
fetchBreeds()
  .then(date => {
    const form = document.createElement('option');
    form.value = '';
    form.textContent = 'Select a cat breed';
    select.appendChild(form);

    date.forEach(element => {
      const option = document.createElement('option');
      option.value = element.id;
      option.textContent = element.name;
      select.appendChild(option);
    });
  })
  .catch(error => console.log(error));

function onclick(eve) {
  const breedId = eve.target.value;
  select.value = '';
  loader.style.display = 'block';
  fetchCatByBreed(breedId)
    .then(date => createMarkup(date))
    .catch(error => console.log(error));
}
select.addEventListener('change', onclick);

function createMarkup(data) {
  const imageUrl = data[0].url;
  const markup = data[0].breeds
    .map(breed => {
      return `<div class ="breed"><img class="breed-image" alt=${breed.name} src=${imageUrl}>
                          <div class="breed-container">
                          <h2 class="breed-name"> ${breed.name}</h2>
                          <p class="breed-temperament"> ${breed.temperament}</p>
                          <p class="breed-description"> ${breed.description}</p>
                      </div></div>`;
    })
    .join('');

  cat.innerHTML = markup;
  loader.style.display = 'none';
}
