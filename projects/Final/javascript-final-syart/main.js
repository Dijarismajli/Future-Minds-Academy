const games = [
    {
        id: 1,
        name: "Adventure Quest",
        thumbnail: "images/adventure-quest.png",
        plays: 1500
    },
    {
        id: 2,
        name: "Space Invaders",
        thumbnail: "images/space-invaders.png",
        plays: 1200
    },
    {
        id: 3,
        name: "Zombie Apocalypse",
        thumbnail: "images/zombie-apocalypse.png",
        plays: 900
    },
];

const game_list = document.querySelector("#game_list")
const game_info = document.querySelector("#game_info")

function gameL() {
    game_list.innerHTML = '';

    for (let i = 0; i < games.length; i++) {
        game_list.innerHTML += `
        <div class="game-item">
            <img src="${games[i].thumbnail}" alt="Game Thumbnail"> 
            <div class="details">
                <h4>${games[i].name}</h4>
                <p>${games[i].plays}</p>
            </div>
            <button onclick="loadGameDetails(${i})">Play Game</button>
        </div>`;
    }

}
gameL();

function loadGameDetails() {
    game_info.innerHTML = '';
    for (let i = 0; i < games.length; i++) {
        game_info.innerHTML = `
    <div class="selected-game">
        <img src="${games[i].thumbnail}" alt="Thumbnail">
        <h2>${games[i].name}</h2>
        <p>${games[i].description}</p>
        <p><strong>Plays:</strong> ${games[i].plays}</p>
        <button onclick="closeDetails()">Close</button>
    </div>`;
    }
    game_info.style.display = 'block'; // Show the details section
}

