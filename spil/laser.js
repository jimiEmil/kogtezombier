function Laser(startpos, angle) {

    this.health = 5*30;

    this.pos = createVector(startpos.x, startpos.y);
    this.vel = p5.Vector.fromAngle(angle);
    //fart på skydet 
    this.vel.mult(10);

    this.update = function () {
        
        for(let i = 0; i < zombier.length; i++){
            let zombie = zombier[i];

            if(zombie.health <= 0){
                continue;
            }

            let zombiePos = createVector(zombie.cx, zombie.cy);
            let zombieDistance = this.pos.dist(zombiePos);
            
            if(zombie.radius >= zombieDistance){
                zombie.health -= 100;
                zombie.health = Math.max(0, zombie.health);
                if(!død2.isPlaying()){
                    død2.play();
                    }
                this.health = 0;
                break;
            }
        }
        this.pos.add(this.vel);
        this.health -= 1;
        
    }

    this.render = function () {
        push();
        stroke('blue');
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    this.hits = function (zombier) {
        var d = dist(this.pos.x, this.pos.y, zombier.pos.x, zombier.pos.y);
        if (d < zombier.r) {
            console.log('HIT');
        }
    }



}