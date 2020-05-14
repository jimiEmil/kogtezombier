function Laser(p1pos, angle){
this.pos =createVector(p1pos.x,p1pos.y);
this.vel = p5.Vector.fromAngle(angle);


this.update = function(){
this.pos.add(this.vel);
}
this.render = function(){
    push();
    stroke(255);
    strokeWeight(4);
   point(this.p1pos.x, this.p1pos.y);
   pop();
}




}