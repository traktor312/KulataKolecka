class bullet {
    constructor(x, y, mx, my, speed, r, dmg) {
        var a = mx - x;
        var b = my - y;
        var c = Math.sqrt(a * a + b * b);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.mx = a / c;
        this.my = b / c;
        this.r = r;
        this.dmg = dmg;
    }

    move() {
        var move = 0;
        while (move < this.speed) {
            this.x += this.mx;
            this.y += this.my;
            move++;
        }
        if (this.speed - move != 0) {
            this.x += this.mx * (move - this.speed);
            this.y += this.my * (move - this.speed);
        }
    }

    paint() {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

function clearProjectiles() {
    projectiles.forEach(function (item, idx) {
        if (item.x > canvas.width || item.x < 0 || item.y > canvas.height || item.y < 0) {
            projectiles.splice(idx, 1);
        }
    })
}