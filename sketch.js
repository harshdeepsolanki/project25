
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,dustbinImage,paperImage;


function preload(){
	paperImage=loadImage("paper.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Paper=new paper(50,85,20)
	bottomground=new Ground(500,670,width,25);
	rightbin=new Dustbin(580+160,600,20,80)
	leftbin=new Dustbin(420+120,600,20,80)
	bottombin=new Dustbin(500+140,650,220,20)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  Paper.display()
  bottomground.display()
  bottombin.display()
  rightbin.display()
  leftbin.display()
  keyPressed()
}

function keyPressed(){

	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:1,y:-2})


	}
}






