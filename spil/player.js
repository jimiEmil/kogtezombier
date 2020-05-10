function Player() {
    this.degToRad = (Math.PI / 180);

    this.health = 30 * 3;

    this.radius = 25;
    
    this.state = {
        up: false,
        down: false,
        left: false,
        right: false,
        
    };
    
    this.rotation = {
        up: 270,
        down: 90,
        left: 180,
        right: 0,

        upRight: 315,
        upLeft: 225,
        downLeft: 135,
        downRight: 45,
        
    };
    
    this.lastRotation = this.rotation.right;

    this.cx = width / 2;
    this.cy = height / 2;

    this.render = function () {
        if (this.health <= 0){
            console.warn("DU FUCKING DØD M8, HAHAHHAHAHAHAH");
            return;

        }

        strokeWeight(5);
        circle(this.cx, this.cy, this.radius * 2);
        
        this.renderLine();
    }
    
    this.renderLine = function(){

        if (this.state.up && this.state.left){
            this.drawLine(this.rotation.upLeft);
            this.lastRotation = this.rotation.upLeft;
        }
        else if (this.state.up && this.state.right){
            this.drawLine(this.rotation.upRight);
            this.lastRotation = this.rotation.upRight;
        }
        else if (this.state.down && this.state.right){
            this.drawLine(this.rotation.downRight);
            this.lastRotation = this.rotation.downRight;
        }
        else if (this.state.down && this.state.left){
            this.drawLine(this.rotation.downLeft);
            this.lastRotation = this.rotation.downLeft;
        }

        else if (this.state.left) {
            this.drawLine(this.rotation.left);
            this.lastRotation = this.rotation.left;
        
        }
        else if (this.state.right) {
            this.drawLine(this.rotation.right);
            this.lastRotation = this.rotation.right;
        }
        else if (this.state.up) {
            this.drawLine(this.rotation.up);
            this.lastRotation = this.rotation.up;
        }
        else if (this.state.down) {
            this.drawLine(this.rotation.down);
            this.lastRotation = this.rotation.down;
        }
        else{
            this.drawLine(this.lastRotation);
        }
    }

    this.drawLine = function(angle){
        let rad = angle * this.degToRad;
        let x = Math.cos(rad) * 30;
        let y = Math.sin(rad) * 30;
        
        push();
        stroke("red");
        line(this.cx, this.cy, this.cx + x, this.cy + y);
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

    
   //lave en pew pew
}



