let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "inside-out-2.jpeg",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "the-taste-of-things.jpeg",
        reviews: "303"
    }
];
//
const allMovies = document.querySelector("#allMovies");
const addBTN = document.querySelector("#addBTN");
const movieModal = document.querySelector("#movieModal");
const cancelBTN = document.querySelector("#cancelBTN");
const submitBTN = document.querySelector("#submitBTN");
const year = document.querySelector("#year");
const movieTitle = document.querySelector("#movieTitle");
const thumb = document.querySelector("#thumb");
const reviews = document.querySelector("#reviews");
const modalTitle = document.querySelector("#modalTitle");

let editAction = false;
let currentMovie = 0;

listTable();
function listTable() {
    let recordsHTML = '';
    for (let i = 0; i < allData.length; i++) {
        recordsHTML += "<tr>";
        recordsHTML += `
                <td>${allData[i].year}</td>
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumb}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <button onclick="editMovie(${i})">Edit</button> 
                    <button onclick="removeMovie(${i})">Remove</button>
                </td>
    `;
        recordsHTML += "</tr>";
    }

    allMovies.innerHTML = recordsHTML;
}

addBTN.addEventListener("click", () => {
    movieModal.style.display = "block";
});

cancelBTN.addEventListener("click", removeModal);

submitBTN.addEventListener('click', submitForm);

function submitForm() {
    modalTitle.textContent = "Add Movie";
    if (!editAction) {
        let objMovie = {};
        objMovie.year = year.value;
        objMovie.name = movieTitle.value;
        objMovie.thumb = thumb.value;
        objMovie.reviews = reviews.value;

        allData.push(objMovie);
    } else {
        let editMovieItem = {};
        editMovieItem.year = year.value;
        editMovieItem.name = movieTitle.value;
        editMovieItem.thumb = "inside-out-2.jpeg";
        editMovieItem.reviews = reviews.value;
        allData[currentMovie] = editMovieItem;
        editAction = false;
    }

    removeModal();
    listTable();
}

function removeModal() {
    year.value = "";
    movieTitle.value = "";
    reviews.value = "";
    editAction = false;
    modalTitle.textContent = "Add Movie";
    movieModal.style.display = "none";
}

function editMovie(m) {
    console.log(m);
    currentMovie = m;
    editAction = true;
    movieModal.style.display = "block";
    modalTitle.textContent = "Edit Movie";
    year.value = allData[currentMovie].year;
    movieTitle.value = allData[currentMovie].name;
    reviews.value = allData[currentMovie].reviews;
}

function removeMovie(m) {
    allData.splice(m, 1);
    listTable();
}