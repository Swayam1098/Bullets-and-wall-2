var bullet, wall, thickness;

var speed, weight;




function setup() {
  createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}



function draw() {
  background("black");  

if(hasCollided(bullet,wall) ){
   bullet.velocityX = 0;




  var Damage= 0.5 *weight * speed* speed / (thickness*thickness*thickness)

  console.log(Damage)

  if(Damage<10 ){
wall.shapeColor = "green"

  }

  if(Damage >10){
wall.shapeColor = "red"

  }

 

}


  drawSprites();
}