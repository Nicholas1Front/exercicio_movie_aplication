// API

const searchInput = document.querySelector("#search-input")  ;
const API_KEY = '939ac071';
const searchBtn = document.querySelector("#search-btn");

//elements
const popup = document.querySelector("#popup");
const popupMsg = document.querySelector("#popup-msg");
const closePopupBtn = document.querySelector("#close-popup-btn")

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

function displayResults(param){
    movieTitle.innerHTML = "";
    movieType.innerHTML = "";
    moiveRatin.innerHTML = "";
    movieRelease.innerHTML = "";
    movieGender.innerHTML = "";
    movieSynopsis.innerHTML = "";

    movieImg.setAttribute("src", param.Poster);
    movieTitle.innerText = param.Title;
    movieType.innerText = param.Type;
    movieRelease.innerText = param.Released;
    movieGender.innerText = param.Genre;
    moiveRatin.innerText = param.imdbRating;
    movieSynopsis.innerText = param.Plot;   
}

function clearResults(){
    searchForResultsContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
}

//event listerners 

searchBtn.addEventListener("click", async function(event){
    event.preventDefault();

    const movie = await getMovie(searchInput.value,API_KEY);

    if (movie === false){
        popupMsg.innerText = "Movie not finded ! Try again !";

        showPopup();

        setTimeout(function(){
            hidePopup();
        },4500);
    }

    displayResults(movie);

    searchForResultsContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
});


closePopupBtn.addEventListener("click", function(event){
    event.preventDefault();

    hidePopup();
})