class Drops
{
  constructor(x, y)
  {
    var options =
    {
	 restitution :0,
     friction :0.1,
	}
	  this.x=x;
	  this.y=y;
	  this.body=Bodies.circle(this.x, this.y, 5, options);
	  World.add(world, this.body);
   }
  display()
  {
	push();
    fill("blue");
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,5, 5);
	pop();
  }
  update()
  {
    if(this.body.position.y > 655)
    {
        Matter.Body.setPosition(this.body, {x: random(0, 1366), y: random(0, 655)});
    }  
  }
}