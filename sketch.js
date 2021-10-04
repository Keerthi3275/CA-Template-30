const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

//create Variables for bgimg,food,rabbit,button



//Load images in function preload


function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  //Create sprite for rabbit, add iamge  & scale it
  

  //Create button

  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  //write code to center the image

}

function draw() 
{
  background(51);

  //Add background Image
  
  //Add fruit Image
  

  rope.show();

  Engine.update(engine);
  ground.show();


  //Write code to display the sprite
   
}

//Decalre the drop function






