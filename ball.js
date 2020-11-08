class Ball {
    constructor(){
        var options = {
            frictionAir:0.005,
            density:1
        }
        this.body = Bodies.circle(200,200,80,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(200,200,80);
        pop(); 
    }

}