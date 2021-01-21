class UmbrellaMan
{
	constructor(x,y)
	{
     var options =
     {
	   isStatic:true
	 }
		    this.x=x;
        this.y=y;
        this.r = 90;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
	}

	display()
	{
    push();
    umbrellaManSprite = createSprite(this.body.position.x, this.body.position.y, 50, 50);
    umbrellaManSprite.addAnimation("moving", umbManImg);
    umbrellaManSprite.scale = 0.3;
    pop();
  }
}