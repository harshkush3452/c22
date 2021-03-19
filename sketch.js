const  Engine=Matter.Engine
const  World=Matter.World
const Bodies=Matter.Bodies

var engine,world

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world();
  object=Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}