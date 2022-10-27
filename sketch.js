
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world ;
var tower;

function preload (){

towerimg=loaddImage("tower.png")



}





function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
   tower=new Tower(150,350,100,250);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
 tower.display();

