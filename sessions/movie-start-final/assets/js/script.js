const allGerne = document.querySelector('#allGerne')
const movieThumb = document.querySelector('.movieThumb')

for (let i = 0; i < allMovies.length; i++) {
    allGerne.inerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`
}


function selected(i) {
}



for (let i = 0; i < 8; i++) {
    movieThumb.innerHTML +=
        `<li>
      <h4>actors</h4>
      <img src="assets/img/ballerina.png" class="img-xl" alt="">
     <p>desc</p>
      <p>length:108min</p>
      Date:10-20-2023
      </li>`
}
