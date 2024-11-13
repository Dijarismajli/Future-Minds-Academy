let allData = [
    {
        year: "2024",
        name: 'BAD boys 4',
        thumbnail: 'fposter,small,wall_texture,product,750x1000.jpg',
        reviews: "2000",
    },
    {
        year: "2024",
        name: 'One Piece',
        thumbnail: 'one_piece_product.jpg',
        reviews: 2333
    }
]


//

const allMovies = document.querySelector("#allMovies")

let recordsHTML = "<tr>";

for (let i = 0; i < allData.length; i++) {
    recordsHTML += "<tr>";
    recordsHTML += `
                <td>${allData[i].year}</td>
                <td>${allData[i].name}</td>
                <td><img width="50" src="${allData[i].thumbnail}" alt=""></td>
                <td>${allData[i].reviews}</td>
                <td>
                    <select name="" id="">
                        <option value="">Edit</option>
                        <option value="">Remove</option>
                    </select>
                </td>
    `;
}
recordsHTML += "</tr>";


allMovies.innerHTML = recordsHTML