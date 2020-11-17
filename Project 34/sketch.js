const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
	createCanvas(600, 450);
	engine = Engine.create();
	world = engine.world;

	bob1 = new Pendulum(120, 350, "black");
	bob2 = new Pendulum(200, 350, "black");
	bob3 = new Pendulum(280, 350, "black");
	bob4 = new Pendulum(360, 350, "black");
	bob5 = new Pendulum(440, 350, "black");

	sling1 = new Sling(bob1.body, {x: 120, y: 150})
	sling2 = new Sling(bob2.body, {x: 200, y: 150})
	sling3 = new Sling(bob3.body, {x: 280, y: 150})
	sling4 = new Sling(bob4.body, {x: 360, y: 150})
	sling5 = new Sling(bob5.body, {x: 440, y: 150})

	Engine.run(engine);
}

function draw(){
	background("black");

	fill("yellow")
	textSize(20);
	text("DRAG THE FIRST ONE", 20, 430)
	text("---->", 40, 380);

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}