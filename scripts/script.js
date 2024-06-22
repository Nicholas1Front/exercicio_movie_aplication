// API

const movieName = document.querySelector("#search-input").value  ;
const API_KEY = '939ac071';
const searchBtn = document.querySelector("#search-btn");

// async function fetchMovieDetails(movieName , API_KEY) {
//     const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`);
//     const data = await response.json();

//     return data;
// }

async function getMovie(name,API_KEY){
    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=${API_KEY}`);
    const data = await response.json();

    return data;
}

console.log(getMovie("Us",API_KEY));