class Polygon{
    constructor(x,y,w,h){
        var options = {
        restitution:0.4,
        friction:0.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
        this.image = loadImage("polygon.png");

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop()
    }
}