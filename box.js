class Box {
    constructor(x){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.body = Bodies.rectangle(x,100,70,70,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        strokeWeight(4);
        stroke("yellow");
        rect(0,0,70,70);
        pop(); 
    }

}