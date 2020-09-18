const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper2, paper1
var box1Sprite, box2Sprite, Box3Sprite, ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1Sprite = createSprite(400, 650, 200, 20);
	box1Sprite.shapeColor = "red"

	box2Sprite = createSprite(300, 610, 20, 100);
	box2Sprite.shapeColor = "red"

	box3Sprite = createSprite(500, 610, 20, 100);
	box3Sprite.shapeColor = "red"

	paper1 = new paper(400, 450, 100);


	ground = createSprite(400, 680, 900, 30);


}

function draw() {
	rectMode(CENTER);
	background(255);


	Engine.run(engine);

	Engine.update(engine);

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.paper, paper1.paper.position, { x: 60, y: -60 });

	}


	paper1.display();

	//paper1.collide(ground);
	//paper1.collide(box1Sprite)
	//paper1.collide(box2Sprite)
	//paper1.collide(box3Sprite)

	drawSprites();

}

