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


//functions 

async function getMovie(movieName , API_KEY){

    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`);

    const movieData = await response.json();

    if (movieData.Response === "False"){
        movieData = false;
    }

    return movieData;
}

function showPopup(){
    popup.style.display = "block";
}

function hidePopup(){
    popup.style.display = "none";
}

function displayResults(){
    let movie = getMovie();

    movieImg.setAttribute("src", `${movie.Poster}`);
    movieTitle.innerText = movie.Title;
    movieType.innerText = movie.Type;
    movieRelease.innerText = movie.Released;
    movieGender.innerText = movie.Genre;
    moiveRatin.innerText = movie.imdbRating;
    movieSynopsis.innerText = movie.Plot;   
}

function clearResults(){
    searchForResultsContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
}


//initialization testing

let movieTest = getMovie("Us",API_KEY);

console.log(movieTest);

//event listerners 

searchBtn.addEventListener("click", function(event){
    event.preventDefault();

    let movie = getMovie(searchInput.value , API_KEY);

    searchForResultsContainer.classList.remove("hide");

    if (movie === false){
        popupMsg.innerText = "Movie not finded ! Try again !";

        showPopup();

        setTimeout(function(){
            hidePopup();
        },4500);
    }

    displayResults();
});
