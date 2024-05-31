const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let bgReady = false;
let catReady = false;
let mouse = false;

bgGame.onload = function () {
    bgReady = true;
}

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
        ctx.drawImage(catImg, 0, 0);
    }
    if (mouseReady) {
        ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
    }
}
setInterval(render, 10);