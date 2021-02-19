const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(450,390,900,20);
    stand1 = new Ground(390,300,250,10);

    b1 = new Box(300,275,30,40);
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);
    b8 = new Box(330,235,30,40);
 b9 = new Box(360,235,30,40);
 b10 = new Box(390,235,30,40);
 b11 = new Box(420,235,30,40);
 b12 = new Box(450,235,30,40);
  //level three
 b13 = new Box(360,195,30,40);
 b14 = new Box(390,195,30,40);
 b15 = new Box(420,195,30,40);
  //top
 b16 = new Box(390,155,30,40);

    ball = new Polygon(50,200,20,20);
    slingshoot = new Slingshot(ball.body,{x:100,y:200})

    Engine.run(engine);
}

function draw(){
    background(0);
    ground.display();
    stand1.display();
    fill("pink");
    strokeWeight(2);
    stroke("black");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("green");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("blue");
    b13.display();
    b14.display();
    b15.display();
    fill("yellow");
    b16.display();
    ball.display();
    slingshoot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshoot.fly()
}