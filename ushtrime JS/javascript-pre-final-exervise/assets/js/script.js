const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const movieDetailList = document.querySelector(".movie-details-page");


let activeMovie = 0;


for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}

loadMovieList = function (g) {
    allMoviesHTML = '';
    movieListGerne = allMovies[g].movies;

    for (let i = 0; i < movieListGerne.length; i++) {
        allMoviesHTML += `<li onclick="movieDetailPage(${g},${i},this)">
            <h4>${movieListGerne[i].title}</h4>
            <img src="assets/img/${movieListGerne[i].thumb}" alt="${movieListGerne[i].title}">
            <p class="description">${movieListGerne[i].desc}</p>
            <div class="row movie-stats m0 p0">
                <div class="col m0 p0">Date: <span>${movieListGerne[i].date}</span></div>
                <div class="col m0 p0">Length: <span>${movieListGerne[i].length}</span> min</div>
            </div>
        </li>`;
    }

    movielist.innerHTML = allMoviesHTML;


    movieDetailPage(g, 0, movielist);
};

movieDetailPage = function (g, m, n) {
    movieListGerne = allMovies[g].movies;

    movieDetails.innerHTML += `<h1>${movieListGerne[m].title} (2023)</h1>
    <h4>Date: ${movieListGerne[m].date} | Length: ${movieListGerne[m].length} min</h4>
    <div class="container">
        ${movieListGerne[m].trailer}
    </div>
    <h4>${movieListGerne[m].actors.join(', ')}</h4>
    <p>${movieListGerne[m].desc}</p>`;

    movieDetailList.innerHTML = movieDetails;

    if (movielist.childNodes[activeMovie]) {
        movielist.childNodes[activeMovie].classList.remove('selected-movie');
    }
    activeMovie = m;
    n.classList.add('selected-movie');
};

populateMovies = function (genreIndex) {
    loadMovieList(parseInt(genreIndex));
};

loadMovieList(0);