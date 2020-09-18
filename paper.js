class paper {
	constructor(x, y, radius) {


		var options = {
			isStatic: false,
			restitution: 0.0000001,
			friction: 0.00000005,
			density: 0.2
		}
		this.x = x
		this.y = y
		this.radius = radius

		this.image = loadImage("paper.png")

		this.paper = Bodies.circle(this.x, this.y, this.radius, options);
		World.add(world, this.paper);



		this.paper.shapeColor = "red";

		this.pap

	}


	display() {
		var pos = this.paper.position
		push();
		translate(pos.x, pos.y);
		imageMode(CENTER)
		image(this.image, 0, this.radius, this.radius);
		pop();

	}

}