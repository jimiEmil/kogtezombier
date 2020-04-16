function Player2() {
    // show

    strokeWeight(5);
    fill(255, 0, 0);
    circle(cx2, cy2, 60);
  

    // update position
    const step = 1;
    if (state2.a) {
        cx2 -= step;
    }
    if (state2.d) {
        cx2 += step;
    }
    if (state2.w) {
        cy2 -= step;
    }
    if (state2.s) {
        cy2 += step;
    }
}

function keyPressed() {
    if (key === 'a') {
        state2.a = true;
    }
    if (key === 'd') {
        state2.d = true;
    }
    if (key === 'w') {
        state2.w = true;
    }
    if (key === 's') {
        state2.s = true;
    }
}

function keyReleased() {
    if (key === 'a') {
        state2.a = false;
    }
    if (key === 'd') {
        state2.d = false;
    }
    if (key === 'w') {
        state2.w = false;
    }
    if (key === 's') {
        state2.s = false;
    }




}