const movies = [
    {
        id: 1,
        title: "Inception",
        poster: "img/inception.png",
        views: 850000,
    },
    {
        id: 2,
        title: "The Dark Knight",
        poster: "img/dark-knight.png",
        views: 1200000,
    },
    {
        id: 3,
        title: "Interstellar",
        poster: "img/interstellar.png",
        views: 950000,
    },
];

const movieList = document.querySelector("#movie_list");
const movieInfo = document.querySelector("#movie_info");

function renderMovieList() {
    movieList.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        movieList.innerHTML += `
        <div class="movie-item">
            <img src="${movies[i].poster}" alt=" Poster">
            <h4>${movies[i].title}</h4>
            <p>Views: ${movies[i].views}</p>
            <button onclick="showMovieDetails(${i})">Details</button>
        </div>`;
    }
}
renderMovieList();

function showMovieDetails(i) {
    movieInfo.innerHTML = `
    <div class="selected-movie">
        <img src="${movies[i].poster}" alt=" Poster">
        <h2>${movies[i].title}</h2>
        <p>Views: ${movies[i].views}</p>
        <button onclick="closeMovieDetails()">Close</button>
    </div>`;
    movieInfo.style.display = "block";
}

function closeMovieDetails() {
    movieInfo.style.display = "none";
}
