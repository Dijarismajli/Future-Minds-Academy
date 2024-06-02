const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let bgReady = false;
let catReady = false;
let mouse = false;

gameOver = false;
let Timer = 15;

bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
catObj.speed = 5;
const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function () {
    catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;

mouseObj.x = Math.floor(Math.random() * 512) - mouseObj.width;
mouseObj.y = Math.floor(Math.random() * 480) - mouseObj.height;

const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function () {
    ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
    mouseReady = true;
}


function render() {
    if (bgReady) {
        ctx.drawImage(bgGame, 0, 0);
    }
    if (catReady) {
        ctx.drawImage(catImg, catObj.x, catObj.y);
    }
    if (mouseReady) {
        ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
    }

    if (catObj.x > 500) { catObj.x = -50 }
    if (catObj.x < -51) { catObj.x = 499 }

    if (catObj.y > 460) { catObj.y = -50 }
    if (catObj.y < -53) { catObj.y = 407 }

    ctx.font = "20px Gergia";
    ctx.fillStyle = "White"
    ctx.fillText("Points:0", 10, 25)

    ctx.font = "20px Gergia";
    ctx.fillStyle = "White"
    ctx.fillText("Timer:" + Timer, 400, 25)
}


addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") { catObj.x += catObj.speed }
    if (e.key == "ArrowLeft") { catObj.x -= catObj.speed }
    if (e.key == "ArrowDown") { catObj.y += catObj.speed }
    if (e.key == "ArrowUp") { catObj.y -= catObj.speed }
    if (catObj.x > 500) { catObj.x = -50 }
    if (catObj.x < -51) { catObj.x = 499 }

    if (catObj.y > 460) { catObj.y = -50 }
    if (catObj.y < -53) { catObj.y = 407 }
})

let startTimer = function () {
    Timer;
    if (Timer != 0) { Timer--; } else { gameOver = true }
}

setInterval(render, 1);
setInterval(startTimer, 1000);
