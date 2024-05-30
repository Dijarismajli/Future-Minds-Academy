const rrafshi = document.createElement("canvas");
document.body.appendChild(rrafshi);

let br = document.createElement('br ')
document.body.appendChild(br)


let startOver = document.createElement('button')
startOver.innerText = "startOver"



const ctx = rrafshi.getContext('2d');

let points = 0;
let ticker = 10;
let winPt = 2
let gameOver = false;
let bgrReady = false;
let bgrImg = new Image();
bgrImg.src = "images/background.png";
bgrImg.onload = function () {
    bgrReady = true;
}

let macaReady = false;
let maca = {};
maca.x = 300;
maca.y = 300;
maca.width = 128;
maca.height = 128;
maca.speed = 5;
let macaImg = new Image();
macaImg.src = "images/cat.png";
macaImg.onload = function () {
    macaReady = true;
}

let miuReady = false;
let miu = {};
miu.x = 50;
miu.y = 50;
miu.width = 52;
miu.height = 54;
let miuImg = new Image();
miuImg.src = "images/mouse.png";
miuImg.onload = function () {
    miuReady = true;
}

addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") {
        maca.y -= maca.speed;
    }
    if (e.key == "ArrowDown") {
        maca.y += maca.speed;
    }
    if (e.key == "ArrowRight") {
        maca.x += maca.speed;
    }
    if (e.key == "ArrowLeft") {
        maca.x -= maca.speed;
    }
});

let miuPosition = function () {
    miu.x = Math.floor(Math.random() * 422) + 20;
    miu.y = Math.floor(Math.random() * 360) + 50;
}

let render = function () {
    if (bgrReady) { ctx.drawImage(bgrImg, 0, 0); }
    if (macaReady) { ctx.drawImage(macaImg, maca.x, maca.y); }
    if (miuReady) { ctx.drawImage(miuImg, miu.x, miu.y); }

    if (maca.x > (rrafshi.width - maca.width / 2)) { maca.x = -maca.width / 2; }
    if (maca.x < (0 - maca.width / 2)) { maca.x = rrafshi.width - maca.width / 2 - 6; }
    if (maca.y > (rrafshi.height - maca.height / 2)) { maca.y = -maca.height / 2; }
    if (maca.y < (0 - maca.height / 2)) { maca.y = rrafshi.height - maca.height / 2 - 6; }

    if (
        maca.x < (miu.x + miu.width)
        && maca.y > (miu.y - maca.height)
        && maca.x > (miu.x - maca.width)
        && maca.y < (miu.y + miu.height)
    ) {
        miuPosition();

        if (ticker != 0) { points++; }
    }

    ctx.font = "20px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " + points, 20, 30);
    ctx.fillText("Timer :" + ticker, 400, 30);

    if (gameOver) {
        if (points >= 5) {
            ctx.fillText("You won:", 200, 30);
        }
        else { ctx.fillText("You lose:", 200, 30); }
    }
}

let startTimer = function () {
    ticker--;
    if (ticker != 0) { ticker--; } else { gameOver = true }
}
let renderInterval = setInterval(render, 10);
let timerInterval = setInterval(startTimer, 1000);

let timer = function () {
    if (timeCounter == 0) {
        gameOverMsg = true
        start
    }
}
startOver.addEventListener("click", function () {
    location.reload();
});