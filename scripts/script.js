// API

const searchInput = document.querySelector("#search-input")  ;
const API_KEY = '939ac071';
const searchBtn = document.querySelector("#search-btn");

//elements
const popup = document.querySelector("#popup");
const popupMsg = document.querySelector("#popup-msg")

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

//functions 

async function getMovie(){
    const movie = searchInput.value ;

    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${API_KEY}`);

    const movieData = await response.json();

    return movieData;
}

function showPopup(){
    popup.style.display = "block";
}

function hidePopup(){
    popup.style.display = "none";
}

//event listerners 

searchBtn.addEventListener("click", function(event){
    event.preventDefault();

    let movie = getMovie();

    if (movie.Response === "False"){
        popupMsg.innerText = "Movie not finded! Try again!";

        showPopup();

        setTimeout(function(){
            hidePopup();
        },4000)
    }
});
