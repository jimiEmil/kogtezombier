function Player() {



    // show

    strokeWeight(5);
    circle(cx, cy, 50);

    // update position
    const step = 1;
    if (state.left) {
        cx -= step;
    }
    if (state.right) {
        cx += step;
    }
    if (state.up) {
        cy -= step;
    }
    if (state.down) {
        cy += step;
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        state.left = true;
    }
    if (keyCode === RIGHT_ARROW) {
        state.right = true;
    }
    if (keyCode === UP_ARROW) {
        state.up = true;
    }
    if (keyCode === DOWN_ARROW) {
        state.down = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        state.left = false;
    }
    if (keyCode === RIGHT_ARROW) {
        state.right = false;
    }
    if (keyCode === UP_ARROW) {
        state.up = false;
    }
    if (keyCode === DOWN_ARROW) {
        state.down = false;
    }
}
