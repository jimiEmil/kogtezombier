let p1;
let p2;
let zombier = [];
let lasers = [];


function setup() {
    createCanvas(windowWidth / 1.01, windowHeight / 1.05);

    frameRate(30);


    cx = width / 2;
    cy = height / 2;


    p1 = new Player();
    p2 = new Player();
    for (var i= 0; i < 10; i++) {
    zombier = new Zombier(p1, p2);
    }
}

function draw() {
    background(220);
    fill(0);
    noStroke();
    // vi skal tegne laseren først så vi ikke kan se den 


   // for (var i =0; i< zombier.length; i++){
     //   zombier[i].render();
   // }
    push();
    if (p1.health > 0 || p2.health > 0) {
        zombier.update();
    }
    zombier.render();

    if (p1.health < 0 || p2.health < 0) {
        console.log("haha, lame");
    }
    pop();



    for (var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
        //if (p1.health > 0 || p2.health > 0) {

        //if (lasers[i].hits(zombier)){ 

      //  }
  //  }

    }

    p1.update();
    p1.render();
    p2.update();
    p2.render();

}


function keyPressed() {

    if (key == ' ') {

        let pos = createVector(p1.cx, p1.cy);
        let heading = radians(p1.lastRotation)
        //let heading = p1.lastRotation
        let myLaser = new Laser(pos, heading);

        lasers.push(myLaser);
        //lasers.push(new Laser(p1.pos, p1.lastRotation));

    }
    if (keyCode === LEFT_ARROW) {
        p1.state.left = true;
    }
    if (keyCode === RIGHT_ARROW) {
        p1.state.right = true;
    }
    if (keyCode === UP_ARROW) {
        p1.state.up = true;
    }
    if (keyCode === DOWN_ARROW) {
        p1.state.down = true;
    }
    if (key === 'a') {
        p2.state.left = true;
    }
    if (key === 'd') {
        p2.state.right = true;
    }
    if (key === 'w') {
        p2.state.up = true;
    }
    if (key === 's') {
        p2.state.down = true;
    }
    if (key == 'q') {

        let pos = createVector(p2.cx, p2.cy);
        let heading = radians(p2.lastRotation)
        //let heading = p1.lastRotation
        let myLaser = new Laser(pos, heading);

        lasers.push(myLaser);
        //lasers.push(new Laser(p1.pos, p1.lastRotation));
    }
}


function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        p1.state.left = false;
    }
    if (keyCode === RIGHT_ARROW) {
        p1.state.right = false;
    }
    if (keyCode === UP_ARROW) {
        p1.state.up = false;
    }
    if (keyCode === DOWN_ARROW) {
        p1.state.down = false;
    }
    if (key === 'a') {
        p2.state.left = false;
    }
    if (key === 'd') {
        p2.state.right = false;
    }
    if (key === 'w') {
        p2.state.up = false;
    }
    if (key === 's') {
        p2.state.down = false;
    }


}