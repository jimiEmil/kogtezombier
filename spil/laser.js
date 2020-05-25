function Laser(startpos, angle) {
    this.pos = createVector(startpos.x, startpos.y);
    this.vel = p5.Vector.fromAngle(angle);
    //fart på skydet 
    this.vel.mult(10);

    this.update = function () {
        
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        stroke('blue');
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    this.hits = function(zombier) {
        var d = dist(this.pos.x, this.pos.y, zombier.pos.x, zombier.pos.y);
        if (d < zombier.r){
            console.log('HIT');
        }
    }



}