const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const restarBtn = document.querySelector('#restartBtn')
const msg = document.querySelector('#msg')

let ticTimer = 15;
let points = 0;
let winingTotal = 3
let freezC = false;

let maca = {};
maca.width = 128;
maca.height = 128;
maca.color = "#ff0000";
maca.x = 200;
maca.y = 300;
maca.speed = 10;
let macaOn = false;

const myMaca = new Image();
myMaca.src = "285686_cat_icon (1).png";

myMaca.onload = function () {
    macaOn = true;
}

let miu = {};
miu.width = 48;
miu.height = 48;
miu.color = "#ff0000";
miu.x = 450
//miu.x = Math.random() * canvas.width;
miu.y = Math.random() * canvas.height;
miu.speed = 10;
let miuOn = false;

const myMiu = new Image();
myMiu.src = "6510504_corona_covid19_mouse_virus_icon.png";

myMiu.onload = function () {
    miuOn = true;
}

addEventListener("keydown", function (event) {
    if (!freezC) {
        if (event.key == "ArrowRight") { maca.x += maca.speed; }
        if (event.key == "ArrowLeft") { maca.x -= maca.speed; }
        if (event.key == "ArrowUp") { maca.y -= maca.speed; }
        if (event.key == "ArrowDown") { maca.y += maca.speed; }
    }
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (macaOn) { ctx.drawImage(myMaca, maca.x, maca.y); }
    if (miuOn) { ctx.drawImage(myMiu, miu.x, miu.y); }

    if (maca.x > 775) { maca.x = -25; }
    if (maca.x < -60) { maca.x = 750; }

    if (maca.y > 500) { maca.y = -40; }
    if (maca.y < -60) { maca.y = 450; }//e bon qe me dal anen tjeter


    if (
        maca.x + 105 > miu.x && maca.y < miu.y + 45
        && maca.x < miu.x + 20 && maca.y > miu.y - 120//&& duhen mu kon true te dyat

    ) {
        miu.x = Math.random() * 755;
        miu.y = Math.random() * 400;

        points++;

    }

    ctx.font = "25px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText("Points: " + points, 10, 25);
    ctx.fillText("Timer: " + ticTimer, 680, 25);//e qet timerin edhe pikt edhe ju jep ngjyren

}

function countDown() {
    if (ticTimer != 0) {
        ticTimer--;
    }

    if (ticTimer == 0) {
        freezC = true;
        if (points >= winingTotal) { msg.textContent = "you Won" }
        else { msg.textContent = "you Lose" }
        restarBtn.style.visibility = 'visible';
    }

}
restarBtn.addEventListener('click', function () {
    window.location.reload();
});

setInterval(render, 1);
setInterval(countDown, 1000); 