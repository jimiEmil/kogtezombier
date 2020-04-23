function Player() {


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
        push();
        //fill(255,0,0);
        stroke("red");
        line(this.cx, this.cy, this.cx+25, this.cy+25);
        pop(); 

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

    
    //lav en form for heading, så man kan se og skyde den vej man kigger (sidst trykkede)
}



