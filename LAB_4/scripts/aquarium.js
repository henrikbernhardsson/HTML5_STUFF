$(document).ready(function () {
    console.log("ready");
    DrawAquarium();
    make_diver();
    make_moray();
    make_shark();
    make_stonefish();
});
function DrawAquarium() {
    var ctx = document.getElementById('canvas').getContext('2d');

    var gradient = ctx.createLinearGradient(100, 50, 100, 400);
    gradient.addColorStop(0, "#008aff");
    gradient.addColorStop(1, "#002c70");

    var gradientFG = ctx.createLinearGradient(0, 0, 0, 500);
    gradientFG.addColorStop(0, "#004e27");
    gradientFG.addColorStop(0.75, "#03331b");
    gradientFG.addColorStop(1, "#051f12");

    var above = ctx.createLinearGradient(0, 20, 35, 60);
    above.addColorStop(0, "#ffe400");
    above.addColorStop(1, "#47ccff");

    var gravel = ctx.createLinearGradient(0, 0, 0, 1000);
    gravel.addColorStop(0, "#c79d0c");
    gravel.addColorStop(1, "#a36708");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 800);

    ctx.fillStyle = gradientFG;
    ctx.fillRect(0, 450, 800, 500);

    ctx.fillStyle = above;
    ctx.fillRect(0, 0, 800, 100);

    ctx.fillStyle = gravel;
    ctx.fillRect(0, 450, 800, 50);
}
function make_diver() {
    var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
    diver_image = new Image();
    diver_image.src = '../img/diver.png';
    diver_image.onload = function () {
        context.drawImage(diver_image, 150, 100, 75, 52);
    }
}
function make_moray() {
    var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
    moray_image = new Image();
    moray_image.src = '../img/moray.png';
    moray_image.onload = function () {
        context.drawImage(moray_image, 230, 350, 100, 75);
    }
}
function make_shark() {
    var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
    shark_image = new Image();
    shark_image.src = '../img/nurseshark.gif';
    shark_image.onload = function () {
        context.drawImage(shark_image, 400, 210, 150, 50);
    }
}
function make_stonefish() {
    var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
    stonefish_image = new Image();
    stonefish_image.src = '../img/stonefish.png';
    stonefish_image.onload = function () {
        context.drawImage(stonefish_image, 400, 300, 200, 100);
    }
}