const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');

console.log(allMovies.length);

for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `
     <option value="${i}">${allMovies[i].gerne}</option>
`;
}

loadMovies(0);
loadMovieDetail(0, 1);

function loadMovies(g) {
    let allMoviesHTML = '';
    let gerneMovies = allMovies[g].movies;

    for (let i = 0; i < gerneMovies.length; i++) {
        allMoviesHTML += `
        <li onclick="loadMovieDetail(${g}, ${i}, this)">
            <h4>${gerneMovies[i].title}</h4>
            <img src="assets/img/${gerneMovies[i].thumb}" alt="Plane">
            <p class="description">${gerneMovies[i].desc}</p>
            <div class="row movie-stats m0 p0">
                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
            </div>
        </li>
        `
    }
    movielist.innerHTML = allMoviesHTML;
}

function loadMovieDetail(g, m, activeMovie) {
    let currentMovie = allMovies[g].movies[m];

    movieDetailsPage.innerHTML = `
        <h1>${currentMovie.title}</h1>
        <h4>Date: ${currentMovie.date} | Length: ${currentMovie.length} min</h4>
        <div class="container">
        ${currentMovie.trailer}
        </div>

        <h4>${currentMovie.actors}</h4>
        <p>${currentMovie.desc}</p>
    `;

    for (let i = 0; i < movielist.children.length; i++) {
        movielist.children[i].classList.remove('selected-movie');
    }
    activeMovie.classList.add('selected-movie');
}