const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var maxDrops = 400;
var drops = [];
var umbrellaMan, umbrellaManSprite;
var rand, thunder1Img, thunder2Img, thunder3Img, thunder4Img
    , thunderCreatedFrame, umbManImg;
var thunder = null;    
function preload()
{
    thunder1Img = loadImage("1.png");
    thunder2Img = loadImage("2.png");
    thunder3Img = loadImage("3.png");
    thunder4Img = loadImage("4.png");
    umbManImg = loadAnimation("walking_8.png", "walking_7.png", "walking_6.png", "walking_5.png",
     "walking_4.png", "walking_3.png", "walking_2.png", "walking_1.png");
}

function setup()
{
   createCanvas(1366, 655);
   engine = Engine.create();
   world = engine.world;
   for(var i = 0; i < maxDrops; i = i + 1)
   {
      drops.push(new Drops(random(0, 1366), random(0, 655)));
   }
   umbrellaMan = new UmbrellaMan(680, 552);

    umbrellaMan.display();
   Engine.run(engine);
}

function draw()
{
    background("black");
    for(var i = 0; i < maxDrops; i = i + 1)
    {
        drops[i].update();
        drops[i].display(); 
    }
    
    rand = Math.round(random(1, 4));
    if(frameCount >= thunderCreatedFrame + 10 && thunder !== null)
    {
        thunder.destroy();
    }
    if(frameCount % 80 === 0)
    {
        thunderCreatedFrame = frameCount;
        if(thunderCreatedFrame <= 800)
        {
            thunder = createSprite(random(40, 1326), random(40, 60), 10, 10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1Img);
            break;
            case 2: thunder.addImage(thunder2Img);
            break;
            case 3: thunder.addImage(thunder3Img);
            break;
            case 4: thunder.addImage(thunder4Img);
            break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6);
        }
        
    }
    drawSprites();
}   