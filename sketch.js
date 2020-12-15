const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var polygon, polygonImg;
var slingshot; 

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600, 800, 1200, 20);
    ground2 = new Ground(500, 500, 300, 20);
    ground3 = new Ground(1000, 250, 300, 20);

    block1 = new Block(430,470,30,40);
    block2 = new Block(460,470,30,40);
    block3 = new Block(490,470,30,40);
    block4 = new Block(520,470,30,40);
    block5 = new Block(550,470,30,40);
    block6 = new Block(460,430,30,40);
    block7 = new Block(490,430,30,40);
    block8 = new Block(520,430,30,40);
    block9 = new Block(490,390,30,40);
    block10 = new Block(930,220,30,40);
    block11 = new Block(960,220,30,40);
    block12 = new Block(990,220,30,40);
    block13 = new Block(1020,220,30,40);
    block14 = new Block(1050,220,30,40);
    block15 = new Block(960,180,30,40);
    block16 = new Block(990,180,30,40);
    block17 = new Block(1020,180,30,40);
    block18 = new Block(990,140,30,40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon,{x:200, y:200});
}

function draw(){
    background("green");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
      slingshot.attach(this.polygon);  
    }
}