var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var interval = setInterval(step, 20);
var projectiles = [];

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function step() {
    clearCanvas();
    player.paint();
    player.move();
    player.fire();
    projectiles.forEach(function (item) {
        item.move();
        item.paint();
    })
    clearProjectiles();
}

document.addEventListener('keydown', function (e) {
    player.setMove(e.code);
})

document.addEventListener('keyup', function (e) {
    player.stopMove(e.code);
})


canvas.addEventListener('mousedown', function (e) {
    player.startFire();
    player.setFire(e.offsetX * canvas.width / $(canvas).width(), e.offsetY * canvas.height / $(canvas).height());
})

canvas.addEventListener('mousemove', function (e) {
    if (player.askFire()) {
        player.setFire(e.offsetX * canvas.width / $(canvas).width(), e.offsetY * canvas.height / $(canvas).height());
    }
})

canvas.addEventListener('mouseup', function (e) {
    player.stopFire();
})