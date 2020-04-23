function Zombier(){

    this.cx = width / 2;
    this.cy = height / 2;
    this.render = function() {
        fill(0, 160, 0);
        strokeWeight(6);
        circle(this.cx, this.cy, 50);
    }

    // this.update = function (){
    //     this.cx+5

    //     if(this.cx >= 100){
    //         this.cx-100;
    //     }
    // }
}