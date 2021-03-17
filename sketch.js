var fixedRect, movingRect;
var r1,r2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  r1 = createSprite(700, 300, 50, 80);
  r1.shapeColor = "yellow";
  
  r2 = createSprite(500,300,80,30);
  r2.shapeColor = "blue";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  r2.x = World.mouseX;
  r2.y = World.mouseY; 

  if (collision(r1,r2)){
    r1.shapeColor="white"
    r2.shapeColor="white"
  }

 else{
  r1.shapeColor="yellow"
  r2.shapeColor="blue"
 }
  drawSprites();
}
function collision(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  return true
}
else {
  return false
}
}