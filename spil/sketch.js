let player;

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player();
}

function draw() {
    background(0);
    player.render();
}
//figur 

function Player() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 30;
    this.render = function () {

        translate(this.pos.x, this.pos.y);
        noFill();
        stroke(255,0,0);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);

    }

}





