import fetchBreeds from './js/cat-api';

// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu";

const refs = {
  selectEl: document.querySelector('.breed-select'),
  catEl: document.querySelector('.cat-info'),
}

refs.selectEl.addEventListener('change', currentSelect)

console.log();

function currentSelect() {
  console.log(refs.selectEl.value);
  const breedId = refs.selectEl.value;
  console.log(breedId);
  refs.catEl.innerHTML = ''
  fetchCatByBreed(breedId)


}
function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}
  &api_key=live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu`)
  .then(response => response.json()).then(data => {
    console.log(data[0].url);
    const img = `<img src="${data[0].url}" alt="" width="300">`;
    
    refs.catEl.insertAdjacentHTML('beforeend', img)
  })
}






fetchBreeds().then(renderBreeds).catch(error => {
  console.log('error');
})

function renderBreeds(data) {
// console.log(data[0].breeds[0].name);
  data.forEach(itm => {
    // console.log(itm.id);
    // fetch(`https://api.thecatapi.com/v1/images/${itm.id}`).then(r => r.json()).then(console.log());
})

const option = data.map((itm, idx) => {
  // console.log(itm.id);
  return `
  <option value="${itm.id}">${itm.name}</option>
  `
}).join()
refs.selectEl.insertAdjacentHTML('beforeend', '<option name="">select</option>')
refs.selectEl.insertAdjacentHTML('beforeend', option)


const img = data.map(itm => {
  return `
  <img src="${itm.url}" alt="" width="300">
  `
})
// refs.catEl.insertAdjacentHTML('beforeend', img)

}
