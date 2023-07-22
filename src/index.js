
const API_KEY = 'live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu';

fetchBreeds().then(renderBreeds).catch(error => {
  console.log('error');
})

function fetchBreeds() {
  // return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`).then(response => {
  return fetch(`https://api.thecatapi.com/v1/images/search?limit=10`).then(response => {
  //   console.log(response.json());
    return response.json()
  })
}

function renderBreeds(data) {
// console.log(data[0].breeds[0].name);
  data.forEach(itm => {
    // itm[idx].breeds[0].name;
    console.log(itm.url);
})
}