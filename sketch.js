const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var poly,rope;
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  
  ground = new Ground(400,760,800,20)
  
  b1 = new Box(390,155,30,40)
  b2 = new Box(420,195,30,40)
  b3 = new Box(390,195,30,40)
  b4 = new Box(360,195,30,40)
  b5 = new Box(450,235,30,40)
  b6 = new Box(420,235,30,40)
  b7 = new Box(390,235,30,40)
  b8 = new Box(360,235,30,40)
  b9 = new Box(330,235,30,40)

  poly = new Polygon(170,450,30)
  rope = new Slingshot(poly.polygon,{x: 170,y: 430})
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  text("Score"+score,750,40);

  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  poly.display();
  rope.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  drawSprites();
}

function mousePressed(){
  Matter.Body.setPosition(poly.polygon,{x: mouseX,y: mouseY})
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(poly.polygon);
  }
}