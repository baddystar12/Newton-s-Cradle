
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(600, 100, 1200, 20);
	bob1 = new Bob(600, 300, 30);
	bob2 = new Bob(660, 300, 30);
	bob3 = new Bob(720, 300, 30);
	bob4 = new Bob(780, 300, 30);
	bob5 = new Bob(840, 300, 30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



