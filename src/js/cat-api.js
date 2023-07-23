
// import fetchBreeds from './cat-api';

const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const option = {
    headers: {
        'x-api-key': 'live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu',
    }
}

// export default function fetchBreeds() {
//     return fetch(url, option).then(response => {
//         return response.json()
//     })
// }


export default function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
        return response.json()
    })
}




// const API_KEY = 'live_EE5U1dvdCILjpuzYwtBoA2og3YzMObJ6nzJJlb1YgGCX5CuXUNrcJ2YxdS9r1CFu';
//   return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`).then(response => {
//   return fetch(`https://api.thecatapi.com/v1/images/search?limit=10`).then(response => {