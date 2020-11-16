const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var g;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
	world = engine.world;

  g=new Ground(650,275,150,15);
  
}

function draw() {
  
  background(255,255,255);  
 
g.display();
  drawSprites();
}