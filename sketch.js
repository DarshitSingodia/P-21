var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(233,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet = createSprite(55, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  

if (wall.x-bullet.x<(bullet.width+wall.width)/2){

bullet.velocityX=0;

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){

wall.shapeColor=color(249,0,1);

}

if (damage<10){

wall.shapeColor=color(59,255,14);

}

}

console.log(damage);

  drawSprites();
}