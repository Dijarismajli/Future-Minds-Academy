const movieGernes = document.querySelector('.movieGernes');
const movielist   = document.querySelector('.movielist');

buildGernes();
listAllMovies(0);

function buildGernes(){
    let allOptions="";
    for(let i=0; i<allMovies.length; i++ ){
        allOptions += '<option value="'+i+'">'+allMovies[i].gerne+'</option>';
    }
   
    movieGernes.innerHTML = allOptions;
}

function listAllMovies(index){
    let buildLi="";
    let holdAllMovies = allMovies[index].movies;

    for (let i=0; i<allMovies[index].movies.length; i++) {
        buildLi += '<li class="selected-movie">';
        buildLi += '<h4>'+holdAllMovies[i].title+'</h4>';
        buildLi += '<img src="assets/img/'+holdAllMovies[i].thumb+'" alt="Plane">';
        buildLi += '<p class="description">'+holdAllMovies[i].desc+'</p>';
        buildLi += '<div class="row movie-stats m0 p0">';
        buildLi += '<class="col m0 p0">Date: <span>'+holdAllMovies[i].date+'</span> </div>';
        buildLi += '<div class="col m0 p0">Length: <span>'+holdAllMovies[i].length+'</span> </div>';
        buildLi += '</div>';
        buildLi += '</li>';
    }
    movielist.innerHTML = buildLi;
}