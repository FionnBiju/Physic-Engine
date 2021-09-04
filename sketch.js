const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,350,400,20,ground_options) ;
  World.add(world , ground);

  console.log(ground);
  
  var ball_options = {
    restitution : 0.8
  }
  
  ball = Bodies.circle(200,100,30,ball_options)
  World.add(world, ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS)
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipse(ball.position.x,ball.position.y,30,30)
}