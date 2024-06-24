// API

const movieName = document.querySelector("#search-input").value  ;
const API_KEY = '939ac071';
const searchBtn = document.querySelector("#search-btn");

//elements

const searchInput = document.querySelector("#search-input").value ;
const searchForResultsContainer = document.querySelector("#search-for-results-container");
const resultContainer = document.querySelector("#result-container");
const movieImg = document.querySelector("#movie-img");
const movieTitle = document.querySelector("#movie-title");
const movieType = document.querySelector("#movie-type") ;
const movieRelease = document.querySelector("#movie-release-date") ;
const movieGender = document.querySelector("#movie-gender") ;
const moiveRatin = document.querySelector("#movie-rating") ;
const movieSynopsis = document.querySelector("#movie-synopsis") ;

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

// console.log(getMovie("the boys",API_KEY));