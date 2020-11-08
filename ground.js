class Ground {
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(600,600,1200,20, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(600,600,1200,20);
    }


}