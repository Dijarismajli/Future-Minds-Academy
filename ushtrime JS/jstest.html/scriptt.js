const Games = document.querySelector("#Games")

for (i = 0; i < allGames; i++) {
    Games.innerHTML += ` 
            <h3>${allGames[i].name}</h3>
            <p>>${allGames[i].desc}p>
            <p>>${allGames[i].views}</p>
            <p>>${allGames[i].likes}</p>`
}

let newGame = {
    name: 'rocket league',
    desc: 'Lorem something rocket league',
    views: 4,
    likes: 104
}

allGames.push(newGame);