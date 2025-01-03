// Book data
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        cover: "images/mockingbird.png",
        author: "Harper Lee",
        genre: "Fiction",
        rating: 4.9,
    },
    {
        id: 2,
        title: "1984",
        cover: "images/1984.png",
        author: "George Orwell",
        genre: "Dystopian",
        rating: 4.8,
    },
    {
        id: 3,
        title: "The Great Gatsby",
        cover: "images/gatsby.png",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        rating: 4.7,
    },
];

// Selectors
const bookList = document.querySelector("#book_list");
const bookInfo = document.querySelector("#book_info");

// Render book list
function renderBookList() {
    bookList.innerHTML = ""; // Clear previous content

    for (let i = 0; i < books.length; i++) {
        bookList.innerHTML += `
        <div class="book-item">
            <img src="${books[i].cover}" alt="${books[i].title} Cover">
            <h4>${books[i].title}</h4>
            <p>${books[i].author}</p>
            <p>Genre: ${books[i].genre}</p>
            <p>Rating: ${books[i].rating}/5</p>
            <button onclick="showBookDetails(${i})">Details</button>
        </div>`;
    }
}

// Show book details
function showBookDetails(i) {

    bookInfo.innerHTML = `
    <div class="selected-book">
        <img src="${books[i].cover}" alt="${books[i].title} Cover">
        <h2>${books[i].title}</h2>
        <p>Author: ${books[i].author}</p>
        <p>Genre: ${books[i].genre}</p>
        <p>Rating: ${books[i].rating}/5</p>
        <button onclick="closeBookDetails()">Close</button>
    </div>`;

    bookInfo.style.display = "block";
}

// Close book details
function closeBookDetails() {
    bookInfo.style.display = "none";
}

// Initialize book list
renderBookList();
