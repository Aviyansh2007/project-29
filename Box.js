class Box{
    constructor(x,y,w,h){
        var options = {
        restitution:0.4,
        friction:0.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;


    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
    }
}