let p1;
let p2;
let zombier;


function setup() {
    createCanvas(windowWidth/1.01, windowHeight/1.05);

    frameRate(30);
    
    
    cx = width / 2;
    cy = height / 2;


    p1 = new Player();
    p2 = new Player();

    zombier = new Zombier(p1, p2);
}

function draw() {
    background(220);
    fill(0);
    noStroke();


    p1.update();
    p1.render();
    p2.update();
    p2.render();

    if(p1.health > 0 || p2.health > 0){
        zombier.update();
    }
    zombier.render();

    if(p1.health < 0 || p2.health < 0){
        console.log("haha, lame");
    }

}


function keyPressed() {
    
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