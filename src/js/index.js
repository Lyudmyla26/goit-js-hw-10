import { fetchBreeds, fetchCatByBreed } from '../js/cat-api';
const select = document.querySelector('.breed-select');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');
const cat = document.querySelector('.cat-info');
fetchBreeds()
  .then(date => {
    date.forEach(element => {
      const heading = document.createElement('option');
      heading.value = element.id;
      heading.textContent = element.name;
      select.appendChild(heading);
    });
  })
  .catch(err => console.log(err));
select.addEventListener('change', clickSelect);
function clickSelect(event) {
  const breedId = event.target.value;
  fetchCatByBreed(breedId)
    .then(date => markup(date))
    .catch(error => console.log(error));
}
function markup(arry) {
  const catMurkup = arry
    .map(breed => {
      return `<img src="${breed.url}" alt="" width= 300>
    <h2>${breed.name}</h2>
    <p>${breed.description}</p>
    <span></span>`;
    })
    .join('');
  cat.innerHTML = catMurkup;
}
