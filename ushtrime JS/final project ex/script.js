let allMovies = [
    {
        title: "Gladiator II",
        desc: "Something about the Gladiator",
        year: "2024",
        trailer: '<iframe src="https://www.youtube.com/embed/YZf8zpchbXE?si=KkkR71SumJKmp7jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        title: "Titanic",
        desc: "The titanic movie was released in ....",
        year: "1997",
        trailer: '<iframe src="https://www.youtube.com/embed/CHekzSiZjrY?si=DuJdiGL23VRZGYu_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        title: "Peaky Blinder",
        desc: "The peaky blinders is an awesome movie.",
        year: "2013",
        trailer: '<iframe src="https://www.youtube.com/embed/oVzVdvGIC7U?si=pymBPSFhopgwpJAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
]
///

const myMovies = document.querySelector("#myMovies")
const TrailerMovie = document.querySelector("#TrailerMovie")

for (let i = 0; i < allMovies.length; i++) {
    myMovies.innerHTML += ` 
        <div onclick="loadMovies(${i})">
            <span>${allMovies[i].title}</span>
            <h3>${allMovies[i].desc}</h3>
            <p>${allMovies[i].year}</p>
        </div>`
}

TrailerMovie.innerHTML = ""
function loadMovies(i) {

    TrailerMovie.innerHTML = allMovies[i].trailer;
    TrailerMovie.innerHTML += ` 
            <div onclick="loadMovies(${i})">
                <span>${allMovies[i].title}</span>
                <h3>${allMovies[i].desc}</h3>
                <p>${allMovies[i].year}</p>
            </div>`
}
