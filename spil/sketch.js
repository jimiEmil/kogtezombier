let p1;
let p2;
let død1;
let død2; 
let skade;
let skud1;
let skud2;

let frameNumber = 1;

let spawnDelay = 60;


let zombier = [];
let lasers = [];



function setup() {
    createCanvas(windowWidth / 1.01, windowHeight / 1.05);
skade = loadSound("lyd/skade.mp3");
skud1 = loadSound("lyd/jimi.mp3");
skud2 = loadSound("lyd/kasper.mp3");
død1 = loadSound("lyd/død.mp3");
død2 = loadSound("lyd/død2.mp3");



    frameRate(30);


    cx = width / 2;
    cy = height / 2;


    p1 = new Player();
    p2 = new Player();
    for (var i = 0; i < 2; i++) {
        zombier.push(new Zombier(p1, p2, this.getRandomInt(0, width),this.getRandomInt(0, height)));
        
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {
    background(220);
    fill(0);
    noStroke();
  
    
    // % hedder modulus :)) og er restværdien efter en division mellem a og b (i dette tilfælde framenumber og spawnDelay)
    if(frameNumber++ % spawnDelay == 0){
        zombier.push(new Zombier(p1, p2, this.getRandomInt(0, width),this.getRandomInt(0, height)));
        spawnDelay -= 1;
        spawnDelay = Math.max(5, spawnDelay);
    }

    push();
    for(let i = 0; i < zombier.length; i++){
        let zombie = zombier[i];
        

        if(zombie.health <= 0){
            continue;
         
        }

        if (p1.health > 0 || p2.health > 0) {
            zombie.update();
        }

        zombie.render();
    }
    

    if (p1.health < 0 || p2.health < 0) {
        console.log("haha, lame");
    }
    pop();

    for (var i = 0; i < lasers.length; i++) {
        if(typeof lasers[i] == 'undefined'){
            continue;
        }
        lasers[i].update();
        lasers[i].render();

        if(lasers[i].health <= 0){
            delete lasers[i];
        }

    }

    p1.update();
    p1.render();
    p2.update();
    p2.render();

    
    textSize(32);
    fill(255);
    text('Player 1 Health: ' + p1.health, 10, 40);
    text('Player 2 Health: ' + p2.health, 10, 70);

    text('player 1 points: ' + p1.point, 980, 40);
    text('player 2 points: ' + p2.point, 980, 70);
    
} 




function keyPressed() {

    if (key == ' ' && p1.wasAlive) {
        skud1.play();
        skud1.setVolume(1);
 
        let pos = createVector(p1.cx, p1.cy);
        let heading = radians(p1.lastRotation)
        //let heading = p1.lastRotation
        let myLaser = new Laser(pos, heading, p1);

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
    if (key == 'q' && p2.wasAlive) {
        skud2.play();
        skud2.setVolume(1);

        let pos = createVector(p2.cx, p2.cy);
        let heading = radians(p2.lastRotation)
        //let heading = p1.lastRotation
        let myLaser = new Laser(pos, heading, p2);

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