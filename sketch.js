
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var ball1, ball2, ball3, ball4, ball5;
var chain1, chain2, chain3, chain4, chain5;
var bgImg;

function preload()
{
	bgImg = loadImage("bgphy.jpg");
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	engine = Engine.create();
	world = engine.world;
	
	ball1 = new Pendulum(400 ,300, rgb(200, 112, 126));
	ball2 = new Pendulum(460, 300, rgb(228, 142, 88));
	ball3 = new Pendulum(520, 300, rgb(103, 143, 174));
	ball4 = new Pendulum(580, 300, rgb(168, 200, 121));
	ball5 = new Pendulum(640, 300, rgb(255, 47, 154));
	//Create the Bodies Here.
	chain1 = new Sling(ball1.body, {x:200, y:50});
	chain2 = new Sling(ball2.body, {x:260, y:50});
	chain3 = new Sling(ball3.body, {x:320, y:50});
	chain4 = new Sling(ball4.body, {x:380, y:50});
	chain5 = new Sling(ball5.body, {x:440, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  drawSprites();
 ball1.display();
 chain1.display();
 ball2.display();
 chain2.display();
 ball3.display();
 chain3.display();
 ball4.display();
 chain4.display();
 ball5.display();
 chain5.display();
 textSize(20);
 fill(200);
 text("Nҽɯƚσɳ'ʂ Cɾαԃʅҽ", width/2-100, 30);
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body, {x : mouseX, y : mouseY});
}

