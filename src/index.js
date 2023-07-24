import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
  selectEl: document.querySelector('.breed-select'),
  catEl: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
};

refs.selectEl.addEventListener('change', currentSelect);

refs.selectEl.classList.toggle('is-hidden');
refs.errorEl.classList.toggle('is-hidden');


function currentSelect() {
  const breedId = refs.selectEl.value;
  console.log(breedId);
  refs.catEl.innerHTML = '';
  refs.loaderEl.classList.toggle('is-hidden');

  fetchCatByBreed(breedId).then(renderCat).catch(errorMessage);
}

  fetchBreeds().then(renderBreeds).catch(errorMessage);

function renderBreeds(data) {
  const option = data.map(itm => {
    return `
  <option value='${itm.id}'>${itm.name}</option>
  `;
  }).join();

  refs.selectEl.insertAdjacentHTML('beforeend', '<option name="">Select</option>');
  refs.selectEl.insertAdjacentHTML('beforeend', option);
  // refs.selectEl.innerHTML = option;
  refs.selectEl.classList.toggle('is-hidden');
  refs.loaderEl.classList.toggle('is-hidden');
}

function renderCat(data) {
  const img = `
  <div><img src='${data[0].url}' alt='' width='300'></div>
  <h2 class='cat-text'>${data[0].breeds[0].name}</h2>
  <p class='cat-text'>${data[0].breeds[0].description}</p>
  <p class='cat-text'><span class='cat-temp'>Temperament: </span> ${data[0].breeds[0].temperament}</p>
`;
  refs.catEl.insertAdjacentHTML('beforeend', img);
  // console.log(data[0].breeds[0].description);
  refs.loaderEl.classList.toggle('is-hidden');
}

function errorMessage(data) {
  refs.selectEl.classList.add('is-hidden');
  refs.loaderEl.classList.add('is-hidden');
  // refs.errorEl.classList.remove('is-hidden');
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}