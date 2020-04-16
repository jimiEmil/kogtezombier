let cx;
let cy;
let cx2;
let cy2;

let state = {
    up: false,
    down: false,
    left: false,
    right: false,

};

let state2 = {
    w: false,
    s: false,
    a: false,
    d: false,
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    cx = width / 2;
    cy = height / 2;

    cx2 = width / 2;
    cy2 = height / 2;
}

function draw() {
    background(220);
    fill(0);
    noStroke();


    Player();
    Player2();
}




