const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;


  var ball_options = {
    restitution : 0.95
  }
  ball = Bodies.circle(200,100,10,ball_options)
  World.add(world,ball);
  ground =new Ground(200,590,1200,20);
  right = new Ground(700,520,20,120);
  left = new Ground(500,520,20,120);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  keyPressed();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
  }
}

