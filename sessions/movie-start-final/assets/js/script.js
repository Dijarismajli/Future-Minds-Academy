const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const moviePage = document.querySelector('.movie-details-page')
let activeMovie = 0;

for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}

let loadMovieList = function (g) {
    let allMoviesHTML = '';
    let movieListGerne = allMovies[g].movies;

    for (let i = 0; i < movieListGerne.length; i++) {
        allMoviesHTML += `<li class"selected-mo" onclick="movieDetailPage(${g}, ${i},this )">
            <h4>${movieListGerne[i].title}</h4>
            <img src="assets/img/${movieListGerne[i].thumb}" alt="Kill Boksoon">
            <p class="description">${movieListGerne[i].desc}</p>
            <div class="row movie-stats m0 p0">
                <div class="col m0 p0">Date: <span>${movieListGerne[i].date}</span> </div>
                <div class="col m0 p0">Length: <span>${movieListGerne[i].length}</span> </div>
            </div>
        </li>`;
    }
    movielist.innerHTML = allMoviesHTML;
    movieDetailPage(0, 0, movielist.firstChild);
}

let movieDetailPage = function (g, m, n) {
    activeMovie = m;
    let movieListGerne = allMovies[g].movies;
    movieDetailHtml = `<h1>${movieListGerne[m].title}(2023)</h1>
<h4>Date: ${movieListGerne[m].date}| Length: ${movieListGerne[m].length}</h4>
<div class="container">
${movieListGerne[m].trailer}
</div>
<h4>${movieListGerne[m].actors}</h4>
<p>${movieListGerne[m].desc}</p>
</div>`;

    moviePage.innerHTML = movieDetailHtml;

    movielist.childNodes[activeMovie].classList.remove('selected-movie');
    activeMovie = m;
    n.classList.add('selected-movie');
}

loadMovieList(0);