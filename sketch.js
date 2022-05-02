
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var piso
var bola,parede1,parede2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic : true
	}
	piso = Bodies.rectangle (400,680,800,10,options)
	World.add (world,piso)

	parede1 = Bodies.rectangle (600,650,10,50,options)
	World.add (world,parede1)

	parede2 = Bodies.rectangle (700,650,10,50,options)
	World.add (world,parede2)

	var coptions = {
		restitution : 0.5,
		friction : 0.8,
		density : 0.8
	}
	bola = Bodies.circle (300,500,50,coptions)
	World.add (world,bola)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode (DEGREES)
  background(0);
  rect (piso.position.x,piso.position.y,800,10)	
  rect (parede1.position.x,parede1.position.y,10,50)
  rect (parede2.position.x,parede2.position.y,10,50)
  ellipse (bola.position.x,bola.position.y,50)
  drawSprites();
 
}
function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (bola,bola.position,{x:80,y:-12})
	}
}



