const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,650);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,600,50,50);
    box2 = new Box(1200,600,50,50);
    box3 = new Box(1000,525,50,50);
    box4 = new Box(1200,525,50,50);
    pig1 = new Pig(1100,600)
    pig2 = new Pig(1100,525);
    log1 = new Log(1100,550,255,PI/2)
    log2 = new Log(1100,500,255,PI/2)
    bird1 = new Bird(400,100)
    ground = new Ground(750,height,1500,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
    ground.display();
}