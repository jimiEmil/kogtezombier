function Player() {
this.pos= createVector(width / 2, height / 2);



    this.state = {
        up: false,
        down: false,
        left: false,
        right: false,

    };

    this.cx = width / 2;
    this.cy = height / 2;
    this.render = function () {
    
    
        strokeWeight(5);
        circle(this.cx, this.cy, 50);
    }

    this.update = function () {



        // update position
        const step = 1;
        if (this.state.left) {
            this.cx -= step;
        }
        if (this.state.right) {
            this.cx += step;
        }
        if (this.state.up) {
            this.cy -= step;
        }
        if (this.state.down) {
            this.cy += step;
        }
    }
}

// function Laser(spos, angle) {
//     this.pos = createVector(spos.x, spos.y);
//     this.vel = p5.Vector.fromAngle(angle);
//     this.vel.mult(10);

//     this.update = function () {
//         this.pos.add(this.vel);
//     }
//     this.render = function () {
//         push();
//         stroke(255);
//         strokeWeight(4);
//         point(this.cx, this.cy)
//         pop();
//     }

// }

