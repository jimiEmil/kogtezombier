function Zombier(p1, p2) {
    console.log(p1, p2);
    this.moveSpeed = 0, 01;

    this.radius = 25;

    this.p1 = p1;
    this.p2 = p2;
    zombPos = createVector(width / 2, height / 2);

    this.cx = (width / 2) + 250;
    this.cy = height / 2;
    this.render = function () {
        fill(0, 160, 0);
        strokeWeight(6);
        circle(this.cx, this.cy, this.radius * 2);
        //circle(this.cx, this.cy, this.radius * 2);
        // beginShape();
        // for (var i= 0; i < 10; i++){
        //   var angle = map(i, 0, 10, 0, TWO_PI);
        //   this.cx = this.r *cos(angle);
        // this.cy = this.r *sin(angle);
        //vertex (cx,cy);

        //}
        //endShape(CLOSE);
    }

    this.update = function () {
        this.followNearestPlayer();
        this.attackPlayerIfInRange(this.p1);
        this.attackPlayerIfInRange(this.p2);
    }

    this.followNearestPlayer = function () {
        let nearestPlayer = this.findNearestPlayer();

        let dx = nearestPlayer.cx - this.cx;
        let dy = nearestPlayer.cy - this.cy;

        let vectorLength = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        dx /= vectorLength;
        dy /= vectorLength;

        this.cx += dx * this.moveSpeed;
        this.cy += dy * this.moveSpeed;

    }

    this.findNearestPlayer = function () {
        let distanceToPlayer1 = this.findDistanceToPlayer(this.p1);
        let distanceToPlayer2 = this.findDistanceToPlayer(this.p2);

        if (distanceToPlayer1 < distanceToPlayer2 && this.p1.health > 0) {
            return this.p1;
        }
        else if (this.p2.health > 0) {
            return this.p2;
        }

    }

    this.findDistanceToPlayer = function (player) {
        let dx = player.cx - this.cx;
        let dy = player.cy - this.cy;

        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }

    this.attackPlayerIfInRange = function (player) {
        let distanceToPlayer = this.findDistanceToPlayer(player);

        let collisionRange = this.radius + player.radius;

        if (collisionRange >= distanceToPlayer) {
            player.health -= 1;
            console.log("dit liv er" + player.health);

        }
    }

}