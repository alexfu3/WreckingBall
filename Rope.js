class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   
    
    fly(){
        Matter.Body.applyForce(this.rope.bodyA,this.rope.bodyA.position,{x:this.pointB.x,y:this.pointB.y});
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("white");
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
             
            pop();
        }
    }
    
}