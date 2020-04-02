let player;


function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Player();
}

function draw() {
    background(0);
    player.render();
    //player.turn(0.1);
}
//figur 

function keyPressed() {
if (keyCode == RIGHT_ARROW){
player.turn(0.1);
} else if (keyCode == LEFT_ARROW){
  player.turn(-0.1);
}

}

function Player() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 30;
    this.heading = PI / 2;



    this.render = function () {
        translate(this.pos.x, this.pos.y);
        rotate(this.heading);
        noFill();
        stroke(255, 0, 0);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);



    }

    this.turn = function (angle) {
        this.heading += angle;
    }

}

//function keyPressed() {

   // if (key == ' ') {
   //   skyd.play();